import React, { useState, useCallback, useEffect } from "react";
import {
  SearchAppBar,
  FoodList,
  BottomNavigation,
  Account,
  UserSetup,
  Cart,
} from "..";
import { useCart } from "../../src/utils/context/CartContext";
import { DataStore } from 'aws-amplify';
import { User } from '../../src/utils/types';
import {User as UserModel} from '../../src/models';
import useUser from '../../src/hooks/useUser';

const Home = () => {
  const [value, setValue] = useState(0);
  const [user,setUser] = useState<User|null>();
  const cart = useCart();

  const _getUser = async()=>{
    try {
      const user = await DataStore.query(UserModel);
      // setUser(user);
      console.log("user retrieved successfully!", JSON.stringify(user, null, 2));
    } catch (error) {
      console.log("Error retrieving posts", error);
    }
  }
  //fetch account data
  useEffect(()=>{
  if(!user) _getUser();
  },[]);
  if (user?.displayName) return <UserSetup />;

  const handleClickViewCart = useCallback(() => {
    cart.toggleCart();
  }, []);

  let currentNavigationElement;
  switch (value) {
    case 1:
      currentNavigationElement = (
        <>
          {" "}
          <SearchAppBar />
          <FoodList />
        </>
      );
      break;
    case 2:
      currentNavigationElement = <div>Wallet</div>;
      break;
    case 3:
      currentNavigationElement = <Account />;
      break;
    default:
      currentNavigationElement = (
        <>
          {" "}
          <SearchAppBar /> <FoodList />
        </>
      );
      break;
  }
  
  return (
    <>
      {currentNavigationElement}

      {cart.isCartShowing && (
        <Cart
          cart={cart}
          onClose={handleClickViewCart}
          open={cart.isCartShowing}
        />
      )}
      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
        numberOfItems={cart.items.length}
        totalCartAmount={cart.totalCartAmount}
        onClickViewCart={handleClickViewCart}
      />
    </>
  );
};

export default Home;
