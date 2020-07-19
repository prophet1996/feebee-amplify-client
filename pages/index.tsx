import React from "react";
import Amplify from "aws-amplify";
import {
  AmplifyAuthenticator,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import App from '../components/App';
import { ThemeProvider } from "@material-ui/core";

import globalTheme from "../src/utils/theme";


import awsExports from "../src/aws-exports";
Amplify.configure(awsExports);



const AuthenticatedApp = () => {
  const handleAuthStateChange = () => {
    window.location.reload();
  };

  return (
    <AmplifyAuthenticator>
      <AmplifySignUp
        headerText="My Custom Sign Up Text"
        slot="sign-up"
        handleAuthStateChange={handleAuthStateChange}
        formFields={[
          { type: "phone_number", label: "Phone Number" },
          { type: "address", label: "Address" },
          { type: "username", label: "Username" },
          { type: "password", label: "Password" },
        ]}
      ></AmplifySignUp>

      <div>
      <ThemeProvider theme={globalTheme}>
        <App />
      </ThemeProvider>
      </div>
      <style jsx global>{`
        html,
        body {
          min-height: 100vh;
          width: 100vw;
          padding: 0;
          margin: 0 !important;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
        #__next {
          min-height: 100vh;
          width: 100vw;
          overflow-x: hidden;
          background-color:#fdf4e9;
        }
      `}</style>
    </AmplifyAuthenticator>
  );
};
//TODO: add callback url after signin /register

export default AuthenticatedApp;
