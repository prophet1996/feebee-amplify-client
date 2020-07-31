import React, {  useState, useContext } from "react";
import CloseIcon from "@material-ui/icons/Close";
// import { getUserAccount } from "../../utils/service/firestore";
import {
 AmplifySignOut,
} from "@aws-amplify/ui-react";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Fab,
  Drawer,
} from "@material-ui/core";
import NavigationIcon from "@material-ui/icons/Navigation";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from "next/router";
import { AddFood } from "..";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import { CODE } from "../../src/utils/const";
import UserContext from '../../src/context/UserProvider';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cfe8fc",
    marginTop: theme.spacing(12),
    minHeight: "100%",
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    height: theme.spacing(14),
    width: theme.spacing(14),
    marginTop: -1 * theme.spacing(10),
  },
  displayName: {
    marginLeft: theme.spacing(1),
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  accountAction: {
    display: "flex",
    flexDirection: "column",
  },
  secondaryInfo: {},
  fab: {
    position: "absolute",
    bottom: theme.spacing(7),
    right: "0px",
    margin: theme.spacing(1),
  },
  addFoodDrawer: {
    "& > div": {
      minHeight: "100vh",
      width: "100vw",
    },
  },
  toolbar: {
    justifyContent: "space-between",
  },
}));
const Account = () => {
  const [openAddFood, setOpenAddFood] = useState(false);
  const [addFoodCloseStatusResponse, setAddFoodCloseStatusResponse] = useState(
    CODE.NO_INFO
  );
  const user = useContext(UserContext);
  const router = useRouter();
  const classes = useStyles();
 

    const {displayName="",owner=""} = user;

  const handleAddFood = () => {
    setOpenAddFood((prevVal) => !prevVal);
    router.push("/?addFood=true", undefined, { shallow: true });
  };
  const handleAddFoodClose = (statusCode:CODE) => {
    setOpenAddFood((prevVal) => !prevVal);
    setAddFoodCloseStatusResponse(statusCode);
  };
  const handleAlertClose = (_?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setAddFoodCloseStatusResponse(CODE.NO_INFO);
  };
  return (
    <>
      <Snackbar
        open={addFoodCloseStatusResponse === CODE.SUCCESS}
        autoHideDuration={3000}
        onClose={handleAlertClose} 
      >
        <Alert onClose={handleAlertClose} severity="success">
          This is a success message!
        </Alert>
      </Snackbar>

      <Container className={classes.root}>
        <div className={classes.header}>
          <Avatar className={classes.avatar} variant="rounded">
            <AccountBoxIcon />
          </Avatar>
          <Typography variant="h5" className={classes.displayName}>
            {user?.displayName}
          </Typography>
        </div>
        <div className={classes.secondaryInfo}></div>
        <div className={classes.accountAction}>
          <Typography variant="body1" className={classes.displayName}>
            Ishank Sharma
          </Typography>{" "}
          <Typography variant="body1" className={classes.displayName}>
            Ishank Sharma
          </Typography>{" "}
          <Typography variant="body1" className={classes.displayName}>
            Ishank Sharma
          </Typography>{" "}
          <Typography variant="body1" className={classes.displayName}>
            Ishank Sharma
          </Typography>
        </div>
      </Container>
      <Fab
        variant="extended"
        color="primary"
        className={classes.fab}
        onClick={handleAddFood}
      >
        <NavigationIcon />
        Cook and Earn!
      </Fab>
      <AmplifySignOut></AmplifySignOut>

      <Drawer
        anchor="bottom"
        open={openAddFood}
        className={classes.addFoodDrawer}
      >
        <div>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <Typography variant="h6">Add food!</Typography>
              <IconButton
                onClick={()=>handleAddFoodClose(CODE.NO_INFO)}
                color="inherit"
                aria-label="add food form"
              >
                <CloseIcon />
              </IconButton>
            </Toolbar>
          </AppBar>
          <AddFood onCloseAddFood={handleAddFoodClose} displayName={displayName} ></AddFood>
        </div>
      </Drawer>
    </>
  );
};

export default Account;
