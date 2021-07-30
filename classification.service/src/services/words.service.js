const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const wordLists = require('../data/wordLists');
/**
 * Get word lists
 * @returns {Promise<Object>}
 */
const queryWords = async () => {
  const words = wordLists;
  return { results: words };
};

module.exports = {
  queryWords,
};
