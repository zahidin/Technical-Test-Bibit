const wrapper = require('../../../helpers/utils/wrapper');
const queryHandler  = require('../repositories/queries/query_handler')
const validator = require('../../../helpers/utils/validator');
const queryModel = require('../repositories/queries/query_model')

const getMovieSearch = async (req, res) => {
    const getData = async () => queryHandler.getMovie(req.query)
    const sendResponse = (result) => {
        result.err ?  wrapper.response(res,'fail',result,'Get Movie Search Failed') 
        : wrapper.response(res,'success',result,'Get Movie Search Success')
    }
    sendResponse(await getData())
}

const getMovieDetail = async (req, res) => {
    const params = {
        id: req.params.id
    }
    const validatedPayload = validator.isValidPayload(params, queryModel.paramsId);
    const getData = async (result) => {
        if(result.err){
          return result;
        }
        return queryHandler.getMovieDetail(result.data);
    };

    const sendResponse = async (result) => {
        result.err ? wrapper.response(res,'fail',result,'Get Detail Movie Failed')
        : wrapper.response(res,'success',result,'Get Detail Movie Success');
    };

  sendResponse(await getData(validatedPayload));
}


module.exports = {
    getMovieSearch,
    getMovieDetail
}