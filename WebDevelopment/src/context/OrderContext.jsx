import React, { createContext, useState, useContext } from 'react';

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orderMessage, setOrderMessage] = useState('');
  const [orderItems, setOrderItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const showOrderMessage = (message) => {
    setOrderMessage(message);
    setTimeout(() => {
      setOrderMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  const addOrderItem = (item) => {
    setOrderItems([...orderItems, item]);
    showOrderMessage('You have added to your item!');
  };

  const removeFromCart = (id) => {
    setOrderItems(orderItems.filter(item => item.id !== id));
  };

  const showError = (message) => {
    setErrorMessage(message);
    setTimeout(() => {
      setErrorMessage('');
    }, 3000); // Hide the message after 3 seconds
  };

  return (
    <OrderContext.Provider value={{ orderMessage, orderItems, addOrderItem, removeFromCart, showError, errorMessage }}>
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = () => {
  return useContext(OrderContext);
};