const express = require('express');
const User = require('../models/User');
const router = express.Router();
const {body, validationResult} = require('express-validator');


// Create a user using: POST "api/auth/". Dosen't require authentication
router.post('/',[
    body('name','Enter a valid Name').isLength({min : 3}),
    body('email','Enter a valid Email').isEmail(),
    body('password','Password must be atleast 5 characters').isLength({min : 5}),
],(req,res)=>{
    const errors =  validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
    }).then(user => res.json(user))
    .catch(err=> console.log(err));
    // res.send(req.body);
})


module.exports = router;