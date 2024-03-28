const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

// Route to register a user
router.post('/register', userController.registerUser);

// Route to login a user
router.post('/login', userController.loginUser);

// Route to get user profile
router.get('/profile', userController.getUserProfile);

module.exports = router;