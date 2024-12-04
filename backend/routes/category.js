const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Hi iam  category route")
})

module.exports = router;
