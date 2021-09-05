const sinon = require('sinon');
const queryHandler = require('../../../../../../bin/modules/movie/repositories/queries/query_handler')
const Domain = require('../../../../../../bin/modules/movie/repositories/queries/domain')


describe('Movie Query Handler', () => {

    const data = {
        success: true,
        data: 'Success',
        message: 'Success Request',
        code: 200
    };

    describe('getMovie', () => {
        it('should return info success getMovie', async () => {
            sinon.stub(Domain.prototype,'getMovieSearch').resolves(data)
            const result = await queryHandler.getMovie({})

            expect(result.code).toBe(200)
            Domain.prototype.getMovieSearch.restore()
        })
    })

    describe('getMovieDetail', () => {
        it('should return info success getMovie', async () => {
            sinon.stub(Domain.prototype,'getMovieDetailById').resolves(data)
            const result = await queryHandler.getMovieDetail({})

            expect(result.code).toBe(200)
            Domain.prototype.getMovieDetailById.restore()
        })
    })
    
    
})
