const express = require('express');
const app = express();
const user = require('./routes/user')
const blog  = require('./routes/blog ')
const category = require('./routes/category')
const comment = require('./routes/comment')
const cors = require('cors');

// Configure CORS
const corsOptions = {
    origin: '*', // Allow all origins (adjust as per your needs)
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  
  // Apply CORS middleware
  app.use(cors(corsOptions));


//   main routing 
app.use('/user',user);
app.use('/comment',comment);
app.use('/category',category);
app.use('/bog',blog);


