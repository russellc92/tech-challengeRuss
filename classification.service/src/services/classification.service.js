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
const classify = async (sentence, options = { subWordInclusive: false, caseSensitive: true }) => {
  if (!sentence || !sentence.length > 0) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'empty sentence');
  }
  let classification = {};
  // dank algo here
  return { result: classification };
};

module.exports = {
  classify,
};
