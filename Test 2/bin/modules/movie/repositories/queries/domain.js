const wrapper = require('../../../../helpers/utils/wrapper');
const validate = require('validate.js')
const { NotFoundError, BadRequestError } = require('../../../../helpers/error');
const service = require('../../utils/service')
const Command = require('../commands/command');

class Movie {
    constructor(){
        this.command = new Command()
    }

    async getMovieSearch(payload){
        const ctx = 'domain-getMovie'

        const dataMovie = await service.getListSearchMovie(payload.q)
        if(dataMovie.err){
            return wrapper.error(new BadRequestError('Something error in search api call'))
        }
        if(dataMovie.Response === 'False'){
            return wrapper.error(new BadRequestError(dataMovie.Error))
        }
        
        const resultLog = await this.command.createSearchLog({data:dataMovie})
        if(resultLog.err){
            return wrapper.error(new NotFoundError('Something error in create log search'))
        }
        return wrapper.data(dataMovie)
    }

    async getMovieDetailById(payload){
        const ctx = 'domain-getMovieDetailById'

        const dataMovie = await service.getDetailMovie(payload.id)
        if(dataMovie.err){
            return wrapper.error(new BadRequestError('Something error in detail api call'))
        }
        if(dataMovie.Response === 'False'){
            return wrapper.error(new BadRequestError(dataMovie.Error))
        }

        const resultLog = await this.command.createDetailMovieLog({data:dataMovie})
        if(resultLog.err){
            return wrapper.error(new NotFoundError('Something error in create log detail'))
        }
        return wrapper.data(dataMovie)
    }
}

module.exports = Movie