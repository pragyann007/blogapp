const express = require('express');
const router = express.Router();

const { login_func, signin_func } = require('../controllers/user.contoller');

// Middleware to parse JSON bodies
router.use(express.json());

// Signup route
router.post('/signup',signin_func);

// Login route
router.post('/login',login_func);

module.exports = router;
