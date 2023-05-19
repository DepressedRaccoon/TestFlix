const router = require('express').Router();

const Movie = require('../models/Movie');

const verify = require('../verifyToken');

// Create new movie

router.post('/', verify, async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body);

        try {
            const savedMovie = await newMovie.save();
            res.status(200).json(savedMovie);
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You're not supposed to mess with this!");
    }
});

// Update movie

router.put('/:id', verify, async (req, res) => {
    if (req.user.isAdmin) {
        try {
           const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, { $set: req.body, }, { new: true });

           res.status(200).json(updatedMovie)
        } catch(err){
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You're not supposed to mess with this!");
    }
});

module.exports = router;