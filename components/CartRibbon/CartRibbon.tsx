import React from "react";
import { makeStyles, Toolbar, Button, ListItemText } from "@material-ui/core";
import { LABELS } from '../../src/utils/const';
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
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

const CartRibbon = ({
  numberOfItems,
  totalCartAmount,
  onClickViewCart,
}: {
  numberOfItems: number;
  totalCartAmount: number;
  onClickViewCart: () => void;
}) => {
  const classes = useStyles();

  return (
    <Toolbar className={classes.cartRibbon}>
      <ListItemText
        className={classes.itemInfo}
        primary={
          <>
            {`${numberOfItems} items `}
            <span>
              {`${LABELS.currency["rupee"]} ${totalCartAmount} `}plus taxes
            </span>
          </>
        }
      ></ListItemText>
      <Button
        onClick={onClickViewCart}
        color="inherit"
        endIcon={<ArrowForwardIosIcon />}
      >
        {LABELS.viewCart}
      </Button>
    </Toolbar>
  );
};

export default CartRibbon;
