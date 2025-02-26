import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import OrderNow from './components/OrderNow';
import YourOrder from './components/YourOrder';
import { OrderProvider } from './context/OrderContext';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order-now" element={<OrderNow />} />
          <Route path="/your-order" element={<YourOrder />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
