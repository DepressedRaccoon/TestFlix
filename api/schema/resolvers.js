const { gql } = require('apollo-server-express');

module.exports = {
    Query: {
        getMovies: async () => {
            try {
                const movies = await Movie.find()
                return movies.reverse()
            } catch (err) {
                throw new Error(err)
            }
        }
    },

    Mutation: {
        createMovie: async (_, { title, desc, img, imgTitle, imgThumb, trailer, video, year, limit, genre, isSeries }) => {
            const newMovie = new Movie({
                title,
                desc,
                img,
                imgTitle,
                imgThumb,
                trailer,
                video,
                year,
                limit,
                genre,
                isSeries
            });

            try {
                const savedMovie = await newMovie.save();
                return savedMovie;
            } catch (err) {
                throw new Error(err)
            }
        },

        updateMovie: async (_, { id, title, desc, img, imgTitle, imgThumb, trailer, video, year, limit, genre, isSeries }) => {

            try {
                const movie = await Movie.findById(id);
                if (movie) {
                    movie.title = title;
                    movie.desc = desc;
                    movie.img = img;
                    movie.imgTitle = imgTitle;
                    movie.imgThumb = imgThumb;
                    movie.trailer = trailer;
                    movie.video = video;
                    movie.year = year;
                    movie.limit = limit;
                    movie.genre = genre;
                    movie.isSeries = isSeries;

                    await movie.save();
                    return movie;
                } else {
                    throw new Error("Movie not found!")
                }
            } catch (err) {
                throw new Error(err)
            }
        },

        deleteMovie: async (_, { id }) => {
            try {
                await Movie.findByIdAndDelete(id);
                return "Movie has been deleted..."
            } catch (err) {
                throw new Error(err)
            }
        },

        getMovies: async (_, { id }) => {
            try {
                const movie = await Movie.findById(id);
                return movie;
            } catch (err) {
                throw new Error(err)
            }
        },

        getRandomMovie: async (_, { isSeries }) => {

            let movie;
            const type = isSeries ? "series" : "movie";
            const random = Math.floor(Math.random() * 10);
            try {
                if (type === "series") {
                    movie = await Movie.aggregate([
                        { $match: { isSeris: true } },
                        { $sample: { size: 1 } }
                    ]);
                } else {
                    movie = await Movie.aggregate([
                        { $match: { isSeris: false } },
                        { $sample: { size: 1 } }
                    ]);
                }
                return movie;
            } catch (err) {
                throw new Error(err)
            }
        }
    }
}