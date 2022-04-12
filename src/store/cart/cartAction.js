import { addCartItem, removeCartItem } from "../../contexts/cartLogic";
import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cartTypes";

const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};

export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addCartItem(cartItems, productToAdd);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart = (cartItems, productToRemove) => {
  const newCartItems = removeCartItem(cartItems, productToRemove);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFormCart = (cartItems, productToRemove) => {
  const newCartItems = clearCartItem(cartItems, productToRemove);

  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setisCartOpen = (boolean) => {
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
};
