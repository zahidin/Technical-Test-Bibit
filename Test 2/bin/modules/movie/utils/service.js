const rp = require('request-promise')
const { InternalServerError } = require('../../../helpers/error');
const wrapper = require('../../../helpers/utils/wrapper');
const config = require('../../../config/config')

const getListSearchMovie = async (payload) => {
    const options = {
        method:'GET',
        url: `http://www.omdbapi.com/?apikey=${config.apiKey}&s=${payload}`,
        headers: {
            'Content-Type': 'application/json',
        },
        json: true
    }

    try {
        return await rp.get(options);
    } catch (error) {
        return wrapper.error(new InternalServerError('Internal server error'));
    }
}

const getDetailMovie = async (payload) => {
    const options = {
        method:'GET',
        url: `http://www.omdbapi.com/?apikey=${config.apiKey}&i=${payload}`,
        headers: {
            'Content-Type': 'application/json',
        },
        json: true
    }

    try {
        return await rp.get(options);
    } catch (error) {
        return wrapper.error(new InternalServerError('Internal server error'));
    }
}

module.exports = {
    getListSearchMovie,
    getDetailMovie
}