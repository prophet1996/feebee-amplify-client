import { useContext, createContext, useState, useEffect } from "react";
import { CartState, CartItem, CartContextType } from "../types";
const defaultCartValue: CartContextType = {
  items: [],
  additem: (_: CartItem) => {},
  removeItem: (_: string) => {},
  clearCart: () => {},
  isCartShowing: false,
  toggleCart: () => {},
  updateCart: (_: CartState) => {},
  updateServings: (_: string, __: number) => {},
  validateCart: () => new Promise((res) => setTimeout(() => res(true), 1000)),
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

  const additem = (item: CartItem) => {
    if (!item) return;

    setCartState({
      ...cartState,
      items: [...cartState.items, item],
      totalCartAmount:
        cartState.totalCartAmount + Number(item.price) * Number(item.servings),
    });
  };

  const removeItem = (_: string) => {};
  
  const updateCart = (updatedCart: CartState) => {
    if (updatedCart) setCartState(updatedCart);
    else throw new Error("Cannot update cart state");
  };

  const updateServings = (id: string, servings: number) => {
    if (!id || !servings) {
      throw new Error("Cannot update servings invalid id or servings");
    }
   
    setCartState((prevState: CartState)=>{
     
      let newTotalCartAmount = 0;
    const newItems = prevState.items.map((item) => {
      let tempItem = item;
      if (item.id === id) {
        tempItem = { ...item, servings };
      }
      newTotalCartAmount += Number(tempItem.price) * Number(tempItem.servings);
      return tempItem;
    });

     return { ...prevState,
      items: newItems,
      totalCartAmount: newTotalCartAmount,}
    });
  };
  const validateCart = () => {
    //TODO connect to graph ql cart validation
    return new Promise<boolean>((res) => setTimeout(() => res(true), 60000));
  };
  const clearCart = () => setCartState(defaultCartValue);

  const toggleCart = () => {
    setCartState((prevState: CartState) => {
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
        updateServings,
        validateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartProvider };
