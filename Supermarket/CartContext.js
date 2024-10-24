// src/components/CartContext.js

import React, { createContext, useContext, useState } from 'react';

// Create the context
const CartContext = createContext();

// Custom hook to use the CartContext
export const useCart = () => useContext(CartContext);

// CartProvider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]); // Array to store completed orders
  // Function to add or update items in the cart
  const addItemToCart = (product) => {
    setCartItems((prevItems) => {
      // Check if the product already exists in the cart using id
      const existingItem = prevItems.find(item => item.id === product.id);

      if (existingItem) {
        // Update the quantity if it exists
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        // Add new product to the cart
        return [...prevItems, product];
      }
    });
  };
  const addOrder = (order) => {
    setOrders((prevOrders) => [...prevOrders, order]);
  };
  // Function to remove an item from the cart
  const removeItemFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  // **Function to update the quantity of a specific item**
  const updateItemQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity <= 0) {
        // If quantity is zero or less, remove the item from the cart
        return prevItems.filter(item => item.id !== productId);
      }
      return prevItems.map(item =>
        item.id === productId
          ? { ...item, quantity }
          : item
      );
    });
  };

  // Function to clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Provide the cart state and actions to children
  return (
    <CartContext.Provider value={{ cartItems, addItemToCart, removeItemFromCart, updateItemQuantity, clearCart ,orders,addOrder}}>
      {children}
    </CartContext.Provider>
  );
};
