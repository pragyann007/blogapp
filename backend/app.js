const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const URL = 'mongodb+srv://<username>:<password>@<cluster-url>/<databaseName>?retryWrites=true&w=majority';

// mongodb config 
mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
      console.log('Connected to MongoDB Atlas');
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB Atlas:', err.message);
  });

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
