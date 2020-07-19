import React, { useState, useEffect, useCallback } from "react";
import {
  Dialog,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  ButtonGroup,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";
import { FoodPostDocument } from "../../src/utils/types";
import { LABELS } from "../../src/utils/const";
// import { getUserAccount } from "../../utils/service/firestore";
import CustomSlider from "../CustomSlider";
import { useCart } from "../../src/utils/context/CartContext";
import CartRibbon from "../CartRibbon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      padding: theme.spacing(2),
      backgroundColor: theme.palette.success.main,
      fontWeight: "bold",
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
    orderScreen: {
      ["& > div > div"]: {
        width: "100vw",
        margin: 0,
        height: "80vh",
        marginTop: "auto",
      },
    },
    orderPrimaryListItem: {
      display: "flex",
      justifyContent: "space-between",
    },
    primsecAction: {
      //Might cause problem
      marginTop:"auto",
      display: "flex",
      flexDirection: "row",
      ["& > button:nth-child(1)"]: {
        backgroundColor: "transparent",
        flexBasis: "100%",
      },
      ["& > button:nth-child(2)"]: {
        color: "white",
        fontWeight: "bolder",
        flexBasis: "100%",
      },
    },
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//TODO: make this a form
const OrderScreen = ({
  post,
  onClose,
}: {
  post: FoodPostDocument | undefined;
  onClose: () => void;
}) => {
  //Optimise render for cart changes
  const cart = useCart();
  const classes = useStyles();
  const [account, setAccount]: any = useState();
  const maxServings = post?.foodPost.servings || 1;
  const [orderServings, setOrderServings] = useState(1);
  const _getAccount = async () => {
    //TODO: implement this
    // const account = (await getUserAccount()).data();
    const account={};
    setAccount(account);
  };

  useEffect(() => {
    if (!account) _getAccount();
  }, []);

  const handleSliderChange = useCallback((value: number) => {
    if (value > 0 && value <= maxServings) setOrderServings(value);
  }, []);
  return (
    <Dialog
      open={!!post}
      onClose={onClose}
      className={classes.orderScreen}
      id="bruh"
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Typography variant="caption">{LABELS.toBeDeliveredAt}</Typography>
        <Typography variant="caption">
          {account?.data?.personalInfo?.address}
        </Typography>
      </AppBar>
      <List>
        <ListItem className={classes.orderPrimaryListItem}>
          <ListItemText
            primary={post?.foodPost.name}
            secondary={`₹ ${post?.foodPost.price}`}
          />
          <CustomSlider
            name="orderServings"
            value={orderServings}
            handleSliderChange={handleSliderChange}
          />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText
            primary="Default notification ringtone"
            secondary="Tethys"
          />
        </ListItem>
      </List>
      <ButtonGroup
        size="large"
        aria-label={`${LABELS.addToCart} or ${LABELS.proceedToCheckout}`}
        className={classes.primsecAction}
      >
        <Button variant="contained" onClick={() => cart.additem(post)}>
          {LABELS.addToCart}
        </Button>
        <Button variant="contained" color="primary">
          {LABELS.proceedToCheckout}
        </Button>
      </ButtonGroup>
      <CartRibbon
        numberOfItems={cart.items.length}
        totalCartAmount={cart.totalCartAmount}
        // onClickViewCart={onClickViewCart}
      />
    </Dialog>
  );
};

export default OrderScreen;
