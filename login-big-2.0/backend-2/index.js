// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Sequelize = require('sequelize');

// Create an instance of Express.js
const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Define the MySQL database connection
const sequelize = new Sequelize('registerlogin', 'root', 'geprekenak', {
  host: 'localhost',
  dialect: 'mysql',
  port:3306,
});

// Define a User model using Sequelize ORM
const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

// Synchronize the model with the database (create the 'user' table if it doesn't exist)
sequelize.sync()
  .then(() => {
    console.log('Database and tables created');
  })
  .catch((err) => {
    console.error('Error creating database tables:', err);
  });

// Routes for registration and login
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Create a new user in the database
    const newUser = await User.create({
      username,
      password,
    });

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error registering user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find a user with the provided username and password
    const user = await User.findOne({
      where: {
        username,
        password,
      },
    });

    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Login failed' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
