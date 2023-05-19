const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },

    desc: { type: String, required: true },

    img: { type: String },
    imgTitle: { type: String },
    imgThumb: { type: String },

    trailer: { type: String },
    video: { type: String },
    year: { type: String },

    genre: { type: String },
    limit: { type: Number },

    isSeries: { type: Boolean, default: false },

    isMovie: { type: Boolean, default: true },

},

    { timestamps: true }

);

module.export = mongoose.model("Movie", MovieSchema); 