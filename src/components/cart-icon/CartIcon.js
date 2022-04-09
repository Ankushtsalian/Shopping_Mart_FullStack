import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../contexts/cart.context";
const CartIcon = () => {
  const { setisCartOpen, cartItems, cartTotalQuantity } =
    useContext(CartContext);

  return (
    <div onClick={setisCartOpen} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartTotalQuantity(cartItems)}</span>
    </div>
  );
};

export default CartIcon;
