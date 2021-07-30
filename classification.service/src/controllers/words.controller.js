const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { wordsService } = require('../services');

const getWords = catchAsync(async (req, res) => {
    const result = await wordsService.queryWords()
    res.send(result);
});

module.exports = {
    getWords
}