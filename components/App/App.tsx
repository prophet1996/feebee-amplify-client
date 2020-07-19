import React from "react";
import Head from "next/head";
import { Home, Login } from "../../components";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { CartProvider } from "../../src/utils/context/CartContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
);

const App = () => {
  const classes = useStyles();

  return (
    <div className="container">
      <Head>
        <title>Feebees India</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <main>
        {/* {authData.initializing && (
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )} */}
          <CartProvider>
            <Home />
          </CartProvider>
        
       
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
