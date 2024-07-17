import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (menu) => {
    const existingItem = cartItems.find((item) => item.menu.menu_id === menu.menu_id);

    if (existingItem) {
      // Item already exists in the cart, update quantity
      setCartItems((prevCartItems) => {
        return prevCartItems.map((item) =>
          item.menu.menu_id === menu.menu_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    } else {
      // Item doesn't exist in the cart, add it
      setCartItems((prevCartItems) => [
        ...prevCartItems,
        { menu, quantity: 1 },
      ]);
    }
  };

  const removeFromCart = (menuId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.menu.menu_id !== menuId)
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.menu.harga * item.quantity, 0);
  };

  return (
    <div>
      {/* Render the Cart component with cartItems, addToCart, removeFromCart, and clearCart as props */}
      {/* For example, you can pass these as props to the AddCart component */}
      {/* <AddCart
        totalItems={calculateTotalItems()}
        totalAmount={calculateTotalAmount()}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
      /> */}
    </div>
  );
}

export default Cart;
