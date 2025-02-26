import { Sequelize, DataTypes } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT,
  }
);

// Define the User model
const User = sequelize.define('User', {
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Define the Order model
const Order = sequelize.define('Order', {
  items: {
    type: DataTypes.JSONB,
    allowNull: false,
  },
});

const db = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Database connected successfully");
  } catch (e) {
    console.error("Failed to connect to the database", e);
  }
};

export { sequelize, User, Order, db };



