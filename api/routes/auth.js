const router = require('express').Router();

const User = require('../models/User');

const CryptoJS = require('crypto-js');

const jwt = require("jsonwebtoken");

// User Regitsration

router.post('/register', async (req, res) => { 
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,

        // Federal Level Encrpytion for Password
        password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString(),
    });

    newUser.save((err) => {
        if (err) {
            res.status(500).json(err);
        } else {
            res.status(201).json('User has been registered!');
        }
    });

  try{ 
    const user = await newUser.save(); 
    res.status(200).json(user);
    } catch(err) {
        res.status(500).json(err);
    }

  });

  // User Login

    router.post('/login', async (req, res) => {
        try {
            const user = User.findOne({email: req.body.email});
            !user && res.status(401).json('Wrong username or password!');

            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            originalPassword !== req.body.password && res.status(401).json('Wrong username or password!');

            const accessToken = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.SECRET_KEY,{expiresIn:"5d"}
            ); 

            const { password, ...info } = user._doc;

           res.status(200).json({...info, accessToken});  

        } catch (err) {
            res.status(500).json(err);
        }

    });

module.exports = router;