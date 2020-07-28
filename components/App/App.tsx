import React from "react";
import { Home } from "../../components";
import { CartProvider } from "../../src/utils/context/CartContext";

const App = () => {

  return (
          <CartProvider>
            <Home />
          </CartProvider>
  );
};

export default App;
