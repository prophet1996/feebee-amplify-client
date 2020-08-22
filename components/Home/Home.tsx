import React, { useState, useCallback, useEffect } from "react";
import {
  SearchAppBar,
  FoodList,
  BottomNavigation,
  Account,
  Cart,
} from "..";
import { useCart } from "../../src/utils/context/CartContext";
import {User as UserModel} from '../../src/models';

const Home = () => {
  const [value, setValue] = useState(0);
  const cart = useCart();


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

      {cart && cart.isCartShowing && (
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
