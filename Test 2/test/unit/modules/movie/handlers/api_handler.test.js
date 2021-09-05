const sinon = require('sinon');
const apiHandler = require('../../../../../bin/modules/movie/handlers/api_handler')
const queryHandler = require('../../../../../bin/modules/movie/repositories/queries/query_handler')

describe('API Handler', () => {
    let resResult, res;
    const resultSuccess = {
        err: null,
        message: 'success',
        data: {},
        code: 200
    };
    
    const resultErr = {
        err: {
            data: { status: 'FAILED' }
        }
    };
    beforeEach(() => {
        resResult = {};
        res = {
          status: (code) => {
            resResult.code = code;
            return {
                send: (response) => {
                    resResult = response
                    return true;
                }
            }
          },
        };
    });


    describe('table test getMovieSearch', () => {
        const tableTest = [
            {
                status:'FAILED',
                resolves: resultErr,
                expect: { code: 409 }
            },
            {
                status:'SUCCESS',
                resolves: resultSuccess,
                expect: { code: 200 }
            }
        ]

        for(const d of tableTest){
            it(`should return ${d.status}`, async () => {
                const req = {
                    params:{
                        q: 'batman'
                    }
                }

                resultSuccess.data.status = d.status;
                sinon.stub(queryHandler,'getMovie').resolves(d.resolves);
                await apiHandler.getMovieSearch(req, res)
                expect(resResult.code).toEqual(d.expect.code);
                expect(resResult.data.status).toEqual(d.status);
                queryHandler.getMovie.restore();
            })
        }
    })

    describe('table test getMovieDetail', () => {
        const tableTest = [
            {
                status:'FAILED',
                resolves: resultErr,
                req:{params:{id:'tt0372784'}},
                expect: { code: 409, message: 'Get Detail Movie Failed' }
            },
            {
                status:'FAILED',
                resolves: resultErr,
                req:{ params:{} },
                expect: { code: 400, message: '"id" is required' }
            },
            {
                status:'SUCCESS',
                resolves: resultSuccess,
                req:{params:{id:'tt0372784'}},
                expect: { code: 200, message: 'Get Detail Movie Success' }
            }
        ]

        for(const d of tableTest){
            it(`should return ${d.status}`, async () => {
                resultSuccess.data.status = d.status;
                sinon.stub(queryHandler,'getMovieDetail').resolves(d.resolves);
                await apiHandler.getMovieDetail(d.req, res)
                expect(resResult.code).toEqual(d.expect.code);
                expect(resResult.message).toEqual(d.expect.message);
                queryHandler.getMovieDetail.restore();
            })
        }
    })
    
})
