const sinon = require('sinon');
const Domain = require('../../../../../../bin/modules/movie/repositories/queries/domain')
const command = require('../../../../../../bin/modules/movie/repositories/commands/command')
const service = require('../../../../../../bin/modules/movie/utils/service')

describe('Domain Movie', () => {
    
    const domain = new Domain();

    describe('getMovieSearch', () => {
        it('should return error when get data from api', async () => {
            sinon.stub(service, 'getListSearchMovie').resolves({err: true});
            const result = await domain.getMovieSearch({});
            expect(result.err.message).toBe('Something error in search api call');
            service.getListSearchMovie.restore();
        })

        it('should return error when response api false', async () => {
            sinon.stub(service, 'getListSearchMovie').resolves({err: false , Response:'False', Error: 'Movie not found!' });
            const result = await domain.getMovieSearch({});
            expect(result.err.message).toBe('Movie not found!');
            service.getListSearchMovie.restore();
        })

        it('should return error when create log after fetch api', async () => {
            sinon.stub(service, 'getListSearchMovie').resolves({err: false ,data:[{test:'test'}]});
            sinon.stub(command.prototype, 'createSearchLog').resolves({err: true});
            const result = await domain.getMovieSearch({});
            expect(result.err.message).toBe('Something error in create log search');
            service.getListSearchMovie.restore();
            command.prototype.createSearchLog.restore();
        })

        it('should return success', async () => {
            sinon.stub(service, 'getListSearchMovie').resolves({err: false ,data:[{test:'test'}]});
            sinon.stub(command.prototype, 'createSearchLog').resolves({err: false});
            const result = await domain.getMovieSearch({});
            expect(result.err).not.toBe(true)
            service.getListSearchMovie.restore();
            command.prototype.createSearchLog.restore();
        })
    })
    
    describe('getMovieDetailById', () => {
        it('should return error when get data from api', async () => {
            sinon.stub(service, 'getDetailMovie').resolves({err: true});
            const result = await domain.getMovieDetailById({id: 123});
            expect(result.err.message).toBe('Something error in detail api call');
            service.getDetailMovie.restore();
        })

        it('should return error when response api false', async () => {
            sinon.stub(service, 'getDetailMovie').resolves({err: false , Response:'False', Error: 'Incorrect IMDb ID.' });
            const result = await domain.getMovieDetailById({id: 123});
            expect(result.err.message).toBe('Incorrect IMDb ID.');
            service.getDetailMovie.restore();
        })

        it('should return error when create log after fetch api', async () => {
            sinon.stub(service, 'getDetailMovie').resolves({err: false ,data:{test:'test'}});
            sinon.stub(command.prototype, 'createDetailMovieLog').resolves({err: true});
            const result = await domain.getMovieDetailById({id: 123});
            expect(result.err.message).toBe('Something error in create log detail');
            service.getDetailMovie.restore();
            command.prototype.createDetailMovieLog.restore();
        })

        it('should return success', async () => {
            sinon.stub(service, 'getDetailMovie').resolves({err: false ,data:[{test:'test'}]});
            sinon.stub(command.prototype, 'createDetailMovieLog').resolves({err: false});
            const result = await domain.getMovieDetailById({id: 123});
            expect(result.err).not.toBe(true)
            service.getDetailMovie.restore();
            command.prototype.createDetailMovieLog.restore();
        })
    })
    
})
