import React, { useState, useEffect, useCallback,useContext } from "react";
import { API, graphqlOperation } from "aws-amplify";
import {
  Dialog,
  AppBar,
  Typography,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TransitionProps } from "@material-ui/core/transitions";
import Slide from "@material-ui/core/Slide";
import {
  FoodPostDocument,
  CartState,
  CartContextType,
} from "../../src/utils/types";
import UserContext from '../../src/context/UserProvider';

import { LABELS } from "../../src/utils/const";
// import { getUserAccount, updateCart } from "../../utils/service/firestore";
import CustomSlider from "../CustomSlider";
import { createOrder } from "../../src/graphql/mutations";

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
  })
);

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
//TODO: make this a form
const Cart = ({
  cart,
  onClose,
  open,
}: {
  cart: CartContextType;
  onClose: () => void;
  open: boolean;
}) => {
  const classes = useStyles();
  const [currentCart, setCurrentCart] = useState();
  const user = useContext(UserContext);

  // const maxServings =  post?.foodPost.servings || 1;
  const [orderServings, setOrderServings] = useState(1);
 
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
      userId:"b8f6b7a2-90a1-4a85-8b1b-90ec8903c6ec"
    };

    API.graphql(graphqlOperation(createOrder, {input:tempOrder}))
      .then((data) => console.log({ data }))
      .catch((err) => console.log("error: ", err));
  };
  useEffect(() => {
    _updateCart();
  }, []);

  const handleSliderChange = useCallback((value: number) => {
    if (value > 0 && value <= maxServings) setOrderServings(value);
  }, []);
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className={classes.orderScreen}
      TransitionComponent={Transition}
    >
      <AppBar className={classes.appBar}>
        <Typography variant="caption">{LABELS.toBeDeliveredAt}</Typography>
        <Typography variant="caption">
          {/* {account?.data?.personalInfo?.address} */}
        </Typography>
      </AppBar>
      <List>
        <ListItem className={classes.orderPrimaryListItem}>
          {/* <ListItemText
            primary={post?.foodPost.name}
            secondary={`₹ ${post?.foodPost.price}`}
          /> */}
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
    </Dialog>
  );
};

export default Cart;
