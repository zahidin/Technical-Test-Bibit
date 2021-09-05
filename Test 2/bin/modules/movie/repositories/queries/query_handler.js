const Movie = require('./domain');
const movie = new Movie();

const getMovie = async (payload) => {
    return await movie.getMovieSearch(payload);
}

const getMovieDetail = async (payload) => {
    return await movie.getMovieDetailById(payload);
}

module.exports = {
    getMovie,
    getMovieDetail
}