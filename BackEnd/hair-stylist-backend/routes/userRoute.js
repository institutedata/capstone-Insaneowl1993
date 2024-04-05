const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/profile', userController.getUserProfile); // Ensure there's authentication middleware if needed

module.exports = router;