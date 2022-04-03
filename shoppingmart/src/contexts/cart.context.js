import { createContext, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  setCartItem: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  // find if cartItems contains productToAdd
  const itemFound = cartItems.find((item) => item.id === productToAdd.id);

  if (itemFound) {
    return cartItems.map((item) =>
      //if found return updated quantity
      item.id === productToAdd.id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );
  }

  //else return new item without quantity updated
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};
const cartTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};
const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartTotal,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
