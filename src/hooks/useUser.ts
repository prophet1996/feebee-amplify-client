import { useState, useEffect } from "react";
import { Auth ,  API, graphqlOperation} from "aws-amplify";
import  {GraphQLResult } from '@aws-amplify/api';

import { userByOwner } from "../../src/graphql/queries";
import { User } from '../utils/types';
import {UserByOwnerQuery} from '../../api';

export default ():null|User => {
  const [user, setUser] = useState<User|null>(null) ;

  const _getUserData = async () => {
    const user = await Auth.currentAuthenticatedUser();
    console.log(user)
    try{
      const userStoreData:GraphQLResult<UserByOwnerQuery> = (await API.graphql(
      graphqlOperation(userByOwner, { owner: user?.attributes?.sub }) )as GraphQLResult<UserByOwnerQuery> 
    );
    setUser((userStoreData?.data?.UserByOwner?.items||[])[0]);
    }catch(err){console.log(err)}
  };
  useEffect(() => {
    if (!user) _getUserData();
  }, []);
  return user;
};

