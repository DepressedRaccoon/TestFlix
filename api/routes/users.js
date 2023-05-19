const router = require('express').Router();

const User = require('../models/User');

const CryptoJS = require('crypto-js');

// Update User

router.put('/:id', async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set:req.body
            });
            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can onlay update your account!");
    }



});
// Delete User

// GET user

// GET all users

// GET user stats

