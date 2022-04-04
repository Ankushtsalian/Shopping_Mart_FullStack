import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/Button";
import CartItem from "../cartItem/CartItem";
import "./cart-dropdown.styles.scss";
const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate("/checkout");
  };
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
