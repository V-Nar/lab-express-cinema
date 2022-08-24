const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: Schema.Types.String,
    director: Schema.Types.String,
    stars: [Schema.Types.String],
    image: Schema.Types.String,
    description: Schema.Types.String,
    showtime: [Schema.Types.String]
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;