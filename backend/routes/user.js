const express = require('express');
const router = express.Router();

// Define routes
router.post('/signup', (req, res) => {
    res.send("Sign up route created");
});

router.post('/login', (req, res) => {
    res.send("Login route created");
});

module.exports = router;
