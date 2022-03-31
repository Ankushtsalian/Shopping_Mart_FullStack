import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const handleClick = () => {
    setisCartOpen(() => !isCartOpen);
  };
  const { isCartOpen, setisCartOpen } = useContext(CartContext);
  return (
    <div className="cart-icon-container">
      <ShoppingIcon onClick={handleClick} className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
