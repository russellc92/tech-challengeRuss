const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

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
  const userDidSupplySentence = classifyBody.sentence || classifyBody.sentence.length > 0;
  if (!userDidSupplySentence) {
    console.log(classifyBody.sentence.length);
    throw new ApiError(httpStatus.BAD_REQUEST, 'empty sentence');
  }
  let classification = { debug: classifyBody.sentence };
  // dank algo here
  return {
    result: { classy: 'test', tags: ['tagTest1', 'tagTest2'] },
  };
};

module.exports = {
  classify,
};
