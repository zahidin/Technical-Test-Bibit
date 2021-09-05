const MovieSearchLog = require('../../../../model/moviesearchlog')
const MovieDetailLog = require('../../../../model/moviedetaillog')
const { DataTypes } = require('sequelize');
const db = require('../../../../model/index')

class Command {

    async createSearchLog(document){
        const collection = MovieSearchLog(db.sequelize, DataTypes)
        return await collection.create({data:document.data})
    }
    
    async createDetailMovieLog(document){
        const collection = MovieDetailLog(db.sequelize, DataTypes)
        return await collection.create({data:document.data})
    }
}

module.exports = Command;
