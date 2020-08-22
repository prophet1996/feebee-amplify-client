import React, { useCallback } from "react";
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
import { FoodPost as FoodPostType } from "../../src/utils/types";
import { LABELS } from "../../src/utils/const";
import CustomSlider from "../CustomSlider";
import { useCart } from "../../src/utils/context/CartContext";
import CartRibbon from "../CartRibbon";
import useUser from "../../src/hooks/useUser";

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
      marginTop: "auto",
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
  post: FoodPostType;
  onClose: () => void;
}) => {
  //Optimise render for cart changes
  const cart = useCart();
  const classes = useStyles();
  const user = useUser();

  const maxServings = post?.servings || 1;
  const { name, price, id } = post;
  const thisItemInCart = cart.items.find((item) => item.id === id);
  const cartOrderServing = thisItemInCart?.servings || 1;
  const handleSliderChange = useCallback((itemId: string, value: number) => {
    if (value > 0 && value <= maxServings) cart.updateServings(itemId, value);
  }, []);

  return (
    <Dialog
      open={!!post}
      onClose={onClose}
      className={classes.orderScreen}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Typography variant="caption">{LABELS.toBeDeliveredAt}</Typography>
        <Typography variant="caption">{user?.address}</Typography>
      </AppBar>
      <List>
        <ListItem className={classes.orderPrimaryListItem}>
          <ListItemText primary={name} secondary={`₹ ${price}`} />
          <CustomSlider
            name="orderServings"
            value={cartOrderServing}
            handleSliderChange={handleSliderChange}
            id={id}
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
        <Button
          variant="contained"
          onClick={() => cart.additem({ ...post, servings: cartOrderServing })}
          disabled={!!thisItemInCart}
        >
          {!thisItemInCart ? LABELS.addToCart : LABELS.alreadyInCart}
        </Button>
        <Button variant="contained" color="primary">
          {LABELS.proceedToCheckout}
        </Button>
      </ButtonGroup>
      <CartRibbon
        numberOfItems={cart.items.length}
        totalCartAmount={cart.totalCartAmount}
        onClickViewCart={() => {
          onClose();
          cart.toggleCart();
        }}
      />
    </Dialog>
  );
};

export default OrderScreen;
