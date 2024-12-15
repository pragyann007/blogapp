const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// mongodb config 
mongoose.connect("mongodb://localhost:27017", )
  .then(() => {
      console.log('Connected to MongoDB ');
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:',);
  });
app.use(express.json());
app.use(express.urlencoded({extended:true}))
// Import routes
const userRoutes = require('./routes/user'); // Adjust path if necessary
const blogRoutes = require('./routes/blog');
const categoryRoutes = require('./routes/category');
const commentRoutes = require('./routes/comment');

// Configure CORS
const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};
app.use(cors(corsOptions));

// Main routing
app.use('/user', userRoutes);
app.use('/blog', blogRoutes);
app.use('/category', categoryRoutes);
app.use('/comment', commentRoutes);



module.exports = app;
