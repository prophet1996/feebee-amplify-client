import React, {  useEffect, useCallback, useContext } from "react";
// import { API, graphqlOperation } from "aws-amplify";
import {
  Dialog,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";

import UserContext from "../../src/context/UserProvider";
import { CartRibbon } from "..";

import { LABELS } from "../../src/utils/const";
// import { getUserAccount, updateCart } from "../../utils/service/firestore";
import CustomSlider from "../CustomSlider";
// import { createOrder } from "../../src/graphql/mutations";
import { useCart } from "../../src/utils/context/CartContext";
import { CartItem } from '../../src/utils/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      position: "relative",
      padding: theme.spacing(2),
      backgroundColor: theme.palette.success.main,
      fontWeight: "bold",
    },

    orderScreen: {
      ["& > div > div"]: {
        width: "100vw",
        margin: 0,
        height: "80vh",
        marginTop: "auto",
        position:"relative",
      },
    },
    orderPrimaryListItem: {
      display: "flex",
      justifyContent: "space-between",
    },
    money: {
      fontWeight: "bold",
      fontSize: theme.spacing(2),
    },
    orderbutton:{
      position:"sticky",
      width:"100%",
    }
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//TODO: make this a form
const Cart = () => {
  const classes = useStyles();
  const user = useContext(UserContext);

  const cart = useCart();
  const isCartShowing = cart.isCartShowing;
  // const cartItems = [...cart?.items,...cart?.items,...cart?.items,...cart?.items,...cart?.items] || [];
  const cartItems = cart?.items || [];
  const maxServings = 10;
  

  // const [cartValidated, setCartValidated] = useState(false);

  const _updateCart = async () => {
    // const newCart = (await updateCart(cart));

    //TODO: implement this
    // updateCart(cart);

    // setCurrentCart(newCart);
    const tempOrder = {
      id: "b8f6b7a2-90a1-4a85-8b1b-das3c6ec",
      price: 10.1,
      postId: "2",
      servings: 2,
      name: "isahnk",
      userId: "b8f6b7a2-90a1-4a85-8b1b-90ec8903c6ec",
    };

    // API.graphql(graphqlOperation(createOrder, { input: tempOrder }))
    //   .then((data) => console.log({ data }))
    //   .catch((err) => console.log("error: ", err));
  };

  const _validateCart = async () => {
    // setCartValidated(await cart.validateCart());
  };

  useEffect(() => {
    _validateCart();
    _updateCart();
  }, []);

  const handleClickViewCart = useCallback(() => {
    cart.toggleCart();
  }, []);

  const handleSliderChange = useCallback((itemId:string,value: number) => {
    if (value > 0 && value <= maxServings) cart.updateServings(itemId,value);
  }, []);

  //if cart is hidden but items are there
  if (cartItems.length > 0 && !isCartShowing) {
    return (
      <CartRibbon
        numberOfItems={cartItems.length}
        totalCartAmount={cart.totalCartAmount}
        onClickViewCart={handleClickViewCart}
      />
    );
  }
  //if cart is showing

  return (
    <Dialog
      open={isCartShowing}
      onClose={handleClickViewCart}
      className={classes.orderScreen}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Typography variant="caption">{LABELS.toBeDeliveredAt}</Typography>
        <Typography variant="caption">{user?.address}</Typography>
      </AppBar>
      <List>
        {cartItems.map((cartItem:CartItem) => (
          <>
            <ListItem className={classes.orderPrimaryListItem}>
              <ListItemText
                primary={cartItem.name}
                secondary={`${LABELS.currency.rupee} ${cartItem.price}`}
              />
              <CustomSlider
                name="orderServings"
                value={cartItem.servings}
                id={cartItem.id}
                handleSliderChange={handleSliderChange}
              />
            </ListItem>
            <Divider />
          </>
        ))}
        <ListItem className={classes.orderPrimaryListItem}>
          <ListItemText primary={LABELS.totalOrderAmount} />
          <Typography variant="h3" className={classes.money}>
            {`${LABELS.currency.rupee} ${cart.totalCartAmount}`}
          </Typography>
        </ListItem>
        
      </List>
      <Button className={classes.orderbutton} variant="contained" color="primary">
          {LABELS.placeOrder}
        </Button>
    </Dialog>
  );
};

export default Cart;
