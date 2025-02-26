import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { OrderContext } from '../context/OrderContext';

function Navbar() {
  const { orderMessage } = useContext(OrderContext);

  return (
    <div>
      <ul className="flex justify-evenly text-white bg-black h-[50px] items-center fixed top-0 left-0 right-0 z-50">
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/home" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/about" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-info-circle"></i>
            <span>About</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/order-now" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-shopping-cart"></i>
            <span>Order Now</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/your-order" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-box"></i>
            <span>Your Order</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/login" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-sign-in-alt"></i>
            <span>Login</span>
          </Link>
        </li>
        <li className="mx-[25px] cursor-pointer flex items-center justify-center">
          <Link to="/signup" className="flex items-center space-x-2 hover:text-gray-300">
            <i className="fas fa-user-plus"></i>
            <span>Signup</span>
          </Link>
        </li>
      </ul>
      {orderMessage && (
        <div className="fixed top-[50px] left-0 bg-green-500 text-white py-2 w-full flex justify-center">
          {orderMessage}
        </div>
      )}
    </div>
  );
}

export default Navbar;