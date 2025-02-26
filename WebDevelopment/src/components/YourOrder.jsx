import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { OrderContext } from "../context/OrderContext";
import axios from 'axios';

const YourOrder = () => {
  const { orderItems, removeFromCart, showError, errorMessage } = useContext(OrderContext);
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const totalAmount = orderItems.reduce((total, item) => total + item.price, 0);

  const handleOrderAll = async () => {
    if (orderItems.length === 0) {
      showError('Please purchase an item before ordering.');
    } else {
      try {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        const response = await axios.post('http://localhost:5000/api/confirm-order', { orderItems }, {
          headers: {
            'Authorization': `Bearer ${token}` // Include the token in the request headers
          }
        });

        if (response.status === 200) {
          setShowConfirmation(true);
        }
      } catch (error) {
        showError(error.response?.data?.message || 'An error occurred while confirming the order.');
      }
    }
  };

  const handleCloseConfirmation = () => {
    setShowConfirmation(false);
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="p-5">
      <h1 className="relative z-10 mt-24 font-bold text-center">Your Order</h1>

      {orderItems.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty</p>
      ) : (
        <div className="flex flex-col items-center p-5">
          {orderItems.map((item, index) => (
            <div key={index} className="flex items-center border border-gray-300 p-4 rounded-lg w-4/5 max-w-md mb-4 bg-white shadow-md">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
              <div className="flex flex-col flex-grow">
                <h3 className="text-lg text-gray-800">{item.name}</h3>
                <p className="text-base text-gray-500">₹{item.price}</p>
                <button
                  className="bg-red-500 text-white border-none py-2 px-3 rounded mt-2 transition duration-300 hover:bg-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  ❌ Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Total Price Section */}
      {orderItems.length > 0 && (
        <div className="text-center text-base font-bold mt-5 p-2 bg-gray-700 text-white rounded border border-gray-300 shadow-md">
          <h2>Total: ₹{totalAmount}</h2>
        </div>
      )}

      <div className="flex justify-end w-full max-w-4xl mt-5">
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 transition duration-300 cursor-pointer"
          onClick={handleOrderAll}
        >
          Order It All
        </button>
      </div>

      {errorMessage && (
        <div className="fixed top-[50px] left-0 bg-red-500 text-white py-2 px-4">
          {errorMessage}
        </div>
      )}

      <button onClick={() => navigate("/order-now")} className="block mt-5 bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700 mx-auto">
        🔙 Go Back to Order Now
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Order Confirmed!</h2>
            <p className="text-lg">Your order has been recorded. We will call you back after some time. Thank You 🙏</p>
            <button
              className="mt-5 bg-blue-500 text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-700"
              onClick={handleCloseConfirmation}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default YourOrder;