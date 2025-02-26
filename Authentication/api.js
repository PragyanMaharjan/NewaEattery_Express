import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import { User, Order, db } from './src/database/db.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Middleware to check if the user is authenticated
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: 'Invalid token.' });
    req.user = user;
    next();
  });
};

// Signup endpoint
app.post('/api/signup', async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const existingUser = await User.findOne({ where: { phoneNumber } });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    const newUser = await User.create({ phoneNumber, password });
    res.status(200).json({ message: 'Signup successful!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login endpoint
app.post('/api/login', async (req, res) => {
  const { phoneNumber, password } = req.body;

  try {
    const user = await User.findOne({ where: { phoneNumber } });
    if (!user || user.password !== password) {
      return res.status(401).json({ message: 'Invalid phone number or password!' });
    }

    const token = jwt.sign({ id: user.id, phoneNumber: user.phoneNumber }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful!', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Order confirmation endpoint
app.post('/api/confirm-order', authenticateToken, async (req, res) => {
  const { orderItems } = req.body;

  try {
    const newOrder = await Order.create({ items: orderItems });
    res.status(200).json({ message: 'Order confirmed!', order: newOrder });
  } catch (error) {
    console.error('Order confirmation error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all orders endpoint
app.get('/api/orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
  db(); // Connect to the database
});