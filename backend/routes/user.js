const express = require('express');
const router = express.Router();
const User = require('../backend/models/user');

// Middleware to parse JSON bodies
router.use(express.json());

// Define routes
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create user
        const data = await User.create({
            name,
            email,
            pass: password // Align this field with your User schema (use `pass` if that's what you defined).
        });

        console.log(data);
        return res.status(201).json({ message: "User created successfully", user: data });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/login', (req, res) => {
    res.send("Login route created");
});

module.exports = router;
