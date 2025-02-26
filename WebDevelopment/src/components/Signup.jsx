import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

export default function SignupPage() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (phoneNumber.length !== 10) {
      setError('Phone Number must be exactly 10 characters long.');
      return;
    } 

    if (password.length < 8) {
      setError('Password must be at least 8 characters long.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setError('');

    try {
      // Make the API request to the signup endpoint
      const response = await axios.post('http://localhost:5000/api/signup', {
        phoneNumber, // Send the phone number
        password,    // Send the password
      });

      setSuccessMessage('Signup successful!');
      setTimeout(() => {
        setSuccessMessage('');
        navigate('/login');
      }, 3000); // Redirect to login page after 3 seconds

    } catch (error) {
      console.log('Signup error:', error.response);
      setError(error.response?.data?.message || 'Failed to signup');
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
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
