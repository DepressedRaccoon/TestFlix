const router = require('express').Router();

const User = require('../models/User');

const CryptoJS = require('crypto-js');

const verify = require('../verifyToken');

// Update User

router.put('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }
        try {
            const updatedUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, { new: true });
            res.status(200).json(updatedUser);
        }
        catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can only update your account!");
    }
});

// Delete User

router.delete('/:id', verify, async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        
        try {
           await User.findByIdAndDelete(req.params.id);
            res.status(200).json('User Deleted!');
        }
        catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You can only delete your own account!");
    }
});

// GET user

// GET all users

// GET user stats

module.exports = router;