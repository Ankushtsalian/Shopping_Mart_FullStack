import { createContext, useState } from "react";

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

  //else return new cartItems without quantity updated
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, productToRemove) => {
  // find if cartItems contains productToAdd
  const itemFound = cartItems.find((item) => item.id === productToRemove.id);

  //if quantity is 1 remove item from cart
  if (itemFound.quantity === 1) {
    return cartItems.filter((item) => item.id !== productToRemove.id);
  }

  //else return new cartItems with quantity updated to decrement
  return cartItems.map((item) =>
    item.id === productToRemove.id
      ? {
          ...item,
          quantity: item.quantity - 1,
        }
      : item
  );
};

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

const cartTotalQuantity = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity, 0);
};
const cartTotal = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
};

export const CartContext = createContext({
  isCartOpen: false,
  setisCartOpen: () => {},
  cartItems: [],
  setCartItem: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFormCart: () => {},
  cartTotal: () => {},
});

const CartProvider = ({ children }) => {
  const [isCartOpen, setisCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (productToAdd) => {
    setCartItems(() => addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(() => removeCartItem(cartItems, productToRemove));
  };
  const clearItemFormCart = (productToRemove) => {
    setCartItems(() => clearCartItem(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setisCartOpen,
    cartItems,
    addItemToCart,
    cartTotalQuantity,
    removeItemFromCart,
    clearItemFormCart,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;