import React from "react";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Amplify from "aws-amplify";
import useUser from "../src/hooks/useUser";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { AmplifyAuthenticator, AmplifySignUp } from "@aws-amplify/ui-react";
import globalTheme from "../src/utils/theme";
import awsExports from "../src/aws-exports";
import { UserSetup } from "../components";
import UserContext from "../src/context/UserProvider";
Amplify.configure(awsExports);
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';


//backdrop styles

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      background: '#fff',
    },
  }),
);

function FeebeeClient(props: any) {
  const { Component, pageProps } = props;
  const user = useUser();
  const classes = useStyles();

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

  let component;
  if (!user) {
    component = (
      <Backdrop className={classes.backdrop} open>
        <CircularProgress color="primary"/>
      </Backdrop>
    );
  } else if (!user?.displayName) {
    component = <UserSetup {...pageProps} />;
  } else {
    component = <Component {...pageProps} />;
  }
  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <div>
        <UserContext.Provider value={user}>
          <ThemeProvider theme={globalTheme}>{component}</ThemeProvider>
        </UserContext.Provider>
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
          background-color: #fdf4e9;
        }
      `}</style>
    </React.Fragment>
  );
}

const withAuthenticator = (WrappedComponent) => {
  const handleAuthStateChange = () => {
    window.location.reload();
  };
  return (props) => (
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

      <WrappedComponent {...props} />
    </AmplifyAuthenticator>
  );
};

export default withAuthenticator(FeebeeClient);
