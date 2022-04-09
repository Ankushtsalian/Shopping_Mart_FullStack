export const addCartItem = (cartItems, productToAdd) => {
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

export const removeCartItem = (cartItems, productToRemove) => {
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

export const clearCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};
