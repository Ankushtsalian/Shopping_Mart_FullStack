import { createContext, useReducer } from "react";
import { createAction } from "../utils/reducer/reducer.utils";
import { addCartItem, clearCartItem, removeCartItem } from "./cartLogic";

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

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};

const INITIAL_STATE = {
  cartItems: [],
  isCartOpen: false,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return { ...state, ...payload };

    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return { ...state, isCartOpen: payload };
    default:
      return state;
  }
};

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const { cartItems, isCartOpen } = state;

  const updateCartItemReducer = (newCartItems) => {
    dispatch(
      createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
      })
    );
  };

  const cartTotalQuantity = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };
  const cartTotal = (cartItems) => {
    return cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItemReducer(newCartItems);
  };

  const removeItemFromCart = (productToRemove) => {
    const newCartItems = removeCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const clearItemFormCart = (productToRemove) => {
    const newCartItems = clearCartItem(cartItems, productToRemove);
    updateCartItemReducer(newCartItems);
  };

  const setisCartOpen = () => {
    dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, !isCartOpen));
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
