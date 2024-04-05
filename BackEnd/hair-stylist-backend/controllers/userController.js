const User = require('../models/User');
const bcrypt = require('bcryptjs'); // Assuming bcryptjs is used for password hashing
const jwt = require('jsonwebtoken'); // Assuming JWT is used for token generation

// Register a new user
const registerUser = async (req, res) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    
    // Create user
    const user = new User({
      username: req.body.username,
      password: hashedPassword,
    });

    // Save user
    const newUser = await user.save();

    // Send response
    res.status(201).json({ success: true, message: 'User created', data: newUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// User login
const loginUser = async (req, res) => {
  try {
    // Check if user exists
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Validate password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: 'Invalid password' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response
    res.status(200).json({ success: true, message: 'User logged in', token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user profile
const getUserProfile = async (req, res) => {
  try {
    // Assuming userID is obtained from token verification middleware
    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ success: true, message: 'User profile fetched', data: user });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, getUserProfile };
