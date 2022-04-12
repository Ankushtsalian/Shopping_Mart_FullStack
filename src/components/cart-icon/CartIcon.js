import React from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cartSelector";
import { useDispatch, useSelector } from "react-redux";
// import { setisCartOpen } from "../../store/cart/cartAction";
import { CART_ACTION_TYPES } from "../../store/cart/cartTypes";
const CartIcon = () => {
  const cartCount = useSelector(selectCartCount);
  const isCartOpen = useSelector(selectIsCartOpen);

  const dispatch = useDispatch();

  const toggleIsCartOpen = () =>
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: !isCartOpen,
    });

  return (
    <div onClick={toggleIsCartOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
