import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";

import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button> GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
