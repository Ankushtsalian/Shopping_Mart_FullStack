import React from "react";
import { useCallback } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { selectCartItems } from "../../store/cart/cartSelector";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);

  const navigate = useNavigate();

  const goToCheckoutHandler = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} type="cart" />
        ))}
      </div>
      <Button onClick={goToCheckoutHandler}> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
