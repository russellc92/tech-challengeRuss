const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const classifyText = require('../utils/classifyText');

/**
 * Primary business logic to classify sentence :)
 *
 * @param {Object} options - query options
 * @param {boolean} [options.subWordInclusive] - Include where target word is in a substring of a word in supplied sentence (e.g "Quiet" => "Quieter")
 * @param {boolean} [options.caseSensitive] - exact match on case or ignore case
 * @returns {Promise<Object>}
 */
const classify = async (classifyBody, options = { subWordInclusive: false, caseSensitive: true }) => {
  console.log({ classifyBody });
  if (!classifyBody) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'No POST request body received');
  }
  const userDidSupplySentence = classifyBody.sentence && classifyBody.sentence.length > 0;
  if (!userDidSupplySentence) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'empty sentence');
  }

  let classification = classifyText(classifyBody.sentence, options);

  return {
    result: { classy: classification, sentence: classifyBody.sentence },
  };
};

module.exports = {
  classify,
};
