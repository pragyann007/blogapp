const express = require('express');
const router = express.Router();

router.post('/login',(req,res)=>{
    res.send("sign up route created ")
})

router.post('login',(req,res)=>{
    res.send("login route created")
})