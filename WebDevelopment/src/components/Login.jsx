import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios for API requests

export default function LoginPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Clear previous error
    setError('');

    try {
      // Make the API request to the login endpoint
      const response = await axios.post('http://localhost:5000/api/login', {
        phoneNumber, // Send the phone number
        password,    // Send the password
      });

      // Check the response for the token
      if (response.data.token) {
        // Store the token in localStorage
        localStorage.setItem('token', response.data.token);
        
        // Log to check the token
        console.log('Login successful, token stored:', response.data.token);

        // Redirect to the "Order Now" page
        navigate('/order-now');
      } else {
        setError('Login failed: No token received');
      }
    } catch (error) {
      console.log('Login error:', error.response);
      setError(error.response?.data?.message || 'Failed to login');
    }
  };

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('https://i.pinimg.com/736x/50/ca/44/50ca4401934853174450947e959b1ef4.jpg')", // Set the image
        backgroundSize: "cover", // Ensures full coverage
        backgroundPosition: "center", // Centers the image
        backgroundRepeat: "no-repeat", // Avoids repetition
      }}
    >
      <div className="bg-white opacity-75 p-8 shadow-md rounded-xl w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/, ''))} // Only numbers
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="submit"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Login
            </button>
          </div>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
          <p className="flex items-center justify-center mt-4">
            Don't have an account?  
            <a 
              href="/signup" 
              className="ml-1 text-blue-500 hover:text-blue-700 hover:underline cursor-pointer"
            >
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
