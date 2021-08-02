const catchAsync = require('../utils/catchAsync');
const { wordsService } = require('../services');

const getWords = catchAsync(async (req, res) => {
  const result = await wordsService.queryWords();
  res.send(result);
});

module.exports = {
  getWords,
};
