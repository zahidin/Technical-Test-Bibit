const rp = require('request-promise');
const sinon = require('sinon');
const service = require('../../../../../bin/modules/movie/utils/service')

describe('Utils Service Movie', () => {

    describe('getListSearchMovie', () => {
        it('should return error when fetch api', async () => {
            sinon.stub(rp, 'get').rejects();
            const result = await service.getListSearchMovie("Test");
            expect(result.err.message).toBe('Internal server error');
            rp.get.restore();
        })
        it('should return success', async () => {
            sinon.stub(rp, 'get').resolves({err:false, data:{success: true}});
            const result = await service.getListSearchMovie("Test");
            expect(result.data.success).toBe(true);
            rp.get.restore();
        })
    })

    describe('getDetailMovie', () => {
        it('should return error when fetch api', async () => {
            sinon.stub(rp, 'get').rejects();
            const result = await service.getDetailMovie("Test");
            expect(result.err.message).toBe('Internal server error');
            rp.get.restore();
        })
        it('should return success', async () => {
            sinon.stub(rp, 'get').resolves({err:false, data:{success: true}});
            const result = await service.getDetailMovie("Test");
            expect(result.data.success).toBe(true);
            rp.get.restore();
        })
    })
    
    
})
