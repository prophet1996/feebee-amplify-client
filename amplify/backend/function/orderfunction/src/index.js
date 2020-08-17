/* Amplify Params - DO NOT EDIT
	API_FEEBEEAMPLIFYCLIENT_FOODPOSTTABLE_ARN
	API_FEEBEEAMPLIFYCLIENT_FOODPOSTTABLE_NAME
	API_FEEBEEAMPLIFYCLIENT_GRAPHQLAPIENDPOINTOUTPUT
	API_FEEBEEAMPLIFYCLIENT_GRAPHQLAPIIDOUTPUT
	API_FEEBEEAMPLIFYCLIENT_GRAPHQLAPIKEYOUTPUT
	API_FEEBEEAMPLIFYCLIENT_USERTABLE_ARN
	API_FEEBEEAMPLIFYCLIENT_USERTABLE_NAME
	AUTH_FEEBEEAUTH_USERPOOLID
	ENV
	FUNCTION_FEEBEEAUTHPOSTCONFIRMATION_NAME
	REGION
	STORAGE_ORDERTABLE_ARN

Amplify Params - DO NOT EDIT */

const { CognitoIdentityServiceProvider, DynamoDB } = require('aws-sdk');
const { v4: uuid } = require('uuid');

const cognitoIdentityServiceProvider = new CognitoIdentityServiceProvider();

const ddbOrderTable = process.env.STORAGE_ORDERTABLE_ARN;
const region = process.env.REGION;

/**
 * Get user pool information from environment variables.
 */
const COGNITO_USERPOOL_ID = process.env.AUTH_FEEBEEAUTH_USERPOOLID;
if (!COGNITO_USERPOOL_ID) {
  throw new Error('Function requires environment variable: \'COGNITO_USERPOOL_ID\'');
}
const COGNITO_USERNAME_CLAIM_KEY = 'cognito:username';

/**
 * The doucment client from the table of that region
 */
const docClient = new DynamoDB.DocumentClient({ region });

function write(params, event, callback) {
  docClient.put(params, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
}

function createOrder(event, callback) {
  const args = { ...event.arguments, id: uuid() };
  const params = {
    TableName: ddbOrderTable,
    Item: args,
  };

  if (Object.keys(event.arguments).length > 0) {
    write(params, event, callback);
  }
}

const getUserData = async (ctx) => {
  const params = {
    UserPoolId: COGNITO_USERPOOL_ID, /* required */
    Username: ctx.identity.claims[COGNITO_USERNAME_CLAIM_KEY], /* required */
  };
  return (await cognitoIdentityServiceProvider.adminGetUser(params).promise()).data;
};

/**
 * Using this as the entry point, you can use a single function to handle many resolvers.
 */
const resolvers = {
  Query: {
    echo: (ctx) => ctx.arguments.msg,
    putOrder: (ctx) => ctx.arguments.msg,
    createOrder: (ctx, cb) => {
      try {
        const user = getUserData(ctx);
        if (user.username) {
          createOrder(ctx, cb);
        }
      } catch (e) {
        throw new Error('NOT FOUND');
      }
    },
  },
};

// event
// {
//   "typeName": "Query", /* Filled dynamically based on @function usage location */
//   "fieldName": "me", /* Filled dynamically based on @function usage location */
//   "arguments": { /* GraphQL field arguments via $ctx.arguments */ },
//   "identity": { /* AppSync identity object via $ctx.identity */ },
//   "source": { /* The object returned by the parent resolver.
//    E.G. if resolving field 'Post.comments', the source is the Post object. */ },
//   "request": { /* AppSync request object. Contains things like headers. */ },
//   "prev": { /* If using the built-in pipeline resolver support,
//    this contains the object returned by the previous function. */ },
// }
exports.handler = async (event, _, cb) => {
  const typeHandler = resolvers[event.typeName];
  if (typeHandler) {
    const resolver = typeHandler[event.fieldName];
    if (resolver) {
      // eslint-disable-next-line no-return-await
      return await resolver(event, cb);
    }
  }
  throw new Error('Resolvers not found.');
};
