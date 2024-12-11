const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// Middleware to parse JSON bodies
router.use(express.json());

// Signup route
router.post('/signup', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create the user
        const data = await User.create({
            name,
            email,
            password: hash
        });

        if(data){
            console.log(name)
        }

        return res.status(201).json({ message: "User created successfully", user: data });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

// Login route
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({ error: "Email and password are required" });
        }

        // Search for the user
        const search_user = await User.findOne({ email });

        if (!search_user) {
            return res.status(404).json({ error: "User not found" });
            console.log()
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, search_user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: "Invalid password" });
        }

        // Login successful
        return res.status(200).json({ message: "Login successful" });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;
