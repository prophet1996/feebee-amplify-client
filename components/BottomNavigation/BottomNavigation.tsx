import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import RestoreIcon from "@material-ui/icons/Restore";
import { makeStyles } from "@material-ui/core";
import Cart from '../Cart';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
  },
  itemInfo: {
    ["& > span"]: {
      display: "flex",
      flexDirection: "column",
    },
  },
}));

export default ({
  value,
  onChange,
}: {
  value: number;
  onChange: (event: any, newValue: any) => void;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Cart />

      <BottomNavigation value={value} onChange={onChange} showLabels>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Orders" icon={<RestoreIcon />} />
        <BottomNavigationAction
          label="Wallet"
          icon={<AccountBalanceWalletIcon />}
        />
        <BottomNavigationAction label="Account" icon={<PersonIcon />} />
      </BottomNavigation>
    </div>
  );
};
