import React from "react";
import { useDispatch } from "react-redux";
import {
  addItemToCart,
  clearItemFormCart,
  removeItemFromCart,
} from "../../store/cart/cartAction";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ cartItem, cartItems }) => {
  const { name, quantity, price, imageUrl } = cartItem;

  const dispatch = useDispatch();

  const clearItemHandler = () => {
    dispatch(clearItemFormCart(cartItems, cartItem));
  };
  const addItemHandler = () => {
    dispatch(addItemToCart(cartItems, cartItem));
  };
  const removeItemHandler = () => {
    dispatch(removeItemFromCart(cartItems, cartItem));
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name} </span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity} </span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={clearItemHandler} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
