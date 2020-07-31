import { useContext, createContext, useState, useEffect } from "react";
import { CartState, CartItem, CartContextType } from "../types";
const defaultCartValue: CartContextType = {
  items: [],
  additem: (_: CartItem | undefined) => {},
  removeItem: (_: string) => {},
  clearCart: () => {},
  isCartShowing: false,
  toggleCart: () => {},
  updateCart: (_: CartState | undefined) => {},
  totalCartAmount: 0,
};
const CartContext = createContext(defaultCartValue);
const useCart = () => useContext(CartContext);

const useEffectCart = () => {
  //I know it doesnt make sense right now but looks like might need later
  const [cartState, setCartState] = useState<CartState>({
    items: [],
    isCartShowing: false,
    totalCartAmount: 0,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [cartState, setCartState] as const;
};

const CartProvider = ({ children }: { children: any }) => {
  const [cartState, setCartState] = useEffectCart();
  const additem = (item: CartItem | undefined) => {
    if (!item) return;

    setCartState({
      ...cartState,
      items: [...cartState.items, item],
      totalCartAmount: cartState.totalCartAmount + Number(item.price),
    });
  };
  const removeItem = (_: string) => {};
  const updateCart = (updatedCart: CartState | undefined) => {
    if (updatedCart) setCartState(updatedCart);
    else throw new Error("Cannot update cart state");
  };
  const clearCart = () => setCartState(defaultCartValue);

  const toggleCart = () => {
    setCartState((prevState: CartState) => {
      console.log("bruh");
      console.log({
        ...prevState,
        isCartShowing: !prevState.isCartShowing,
      });
      return {
        ...prevState,
        isCartShowing: !prevState.isCartShowing,
      };
    });
  };
  return (
    <CartContext.Provider
      value={{
        ...cartState,
        additem,
        removeItem,
        clearCart,
        toggleCart,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
