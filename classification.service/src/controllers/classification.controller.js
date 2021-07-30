const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { classificationService } = require('../services');

const classifySentence = catchAsync(async (req, res) => {
  const options = pick(req.body, ['subWordInclusive', 'caseSensitive']);
  const result = await classificationService.classify(req.body, options);
  res.send(result);
});

module.exports = {
  classifySentence,
};
