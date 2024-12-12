const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');


const signup_func =  async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);

        // Create the user
        const data = await User.create({
            username,
            email,
            password: hash
        });

    
        return res.status(201).json({ message: "User created successfully", user: data });
    } catch (error) {
        console.error("Error during signup:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}

const login_func = async (req, res) => {
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

            const token = jwt.sign({email},"lalalala",{expiresIn:'365d'});
            return res.status(200).json({ message: "Login successful",token:token });

            

        
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
}


module.exports = {
    login_func,
    signup_func,
    
}