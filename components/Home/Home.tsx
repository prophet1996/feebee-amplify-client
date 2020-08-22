import React, { useState, useCallback, useEffect } from "react";
import { SearchAppBar, FoodList, BottomNavigation, Account, Cart } from "..";

const Home = () => {
  const [value, setValue] = useState(0);

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

      <BottomNavigation
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      />
    </>
  );
};


export default Home;
