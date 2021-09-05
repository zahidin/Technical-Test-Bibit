const express = require('express');
const movieHandler = require('../modules/movie/handlers/api_handler')
const connectionDB = require('../helpers/databases/sequalize/connection')

function AppServer(){
    this.server = express();
    this.server.get('/movie/search', movieHandler.getMovieSearch)
    this.server.get('/movie/detail/:id', movieHandler.getMovieDetail)
}

connectionDB()
module.exports = AppServer;