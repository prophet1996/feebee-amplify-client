import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import RestoreIcon from "@material-ui/icons/Restore";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { makeStyles, Toolbar, Button, ListItemText } from "@material-ui/core";
import { LABELS } from "../../src/utils/const";
import { CartRibbon } from "..";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    width: "100vw",
  },
  cartRibbon: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.light,
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
  numberOfItems,
  totalCartAmount,
  onClickViewCart,
}: {
  value: number;
  onChange: (event: any, newValue: any) => void;
  numberOfItems: number;
  totalCartAmount: number;
  onClickViewCart: () => void;
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {numberOfItems > 0 && (
        <CartRibbon
          numberOfItems={numberOfItems}
          totalCartAmount={totalCartAmount}
          onClickViewCart={onClickViewCart}
        />
      )}
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
