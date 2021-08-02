const wordList = require('../data/wordLists.js');
/**
 * Core clasiification business logic.
 *
 * The classification depends on the number of words found in the text from the following lists. If
 * the input text contains more List A words than List B words, the text will be classified as
 * URGENT. If it contains more List B words than List A words, it will be classified as NOT URGENT.
 * Otherwise, it will be classified as UNKNOWN
 * Note that even if the words are repeated, each mention should be counted separately
 *
 * @param {string} sentence
 * @param {Object} options
 */
const classifyText = (sentence, options) => {
  let listA = preProcessWordList(wordList.wordList.listA, options.caseSensitive);
  let listB = preProcessWordList(wordList.wordList.listB, options.caseSensitive);

  let splitSentence = preProcessSentence(sentence, options.caseSensitive);
  let listACount = countOccurances(splitSentence, listA);
  let listBCount = countOccurances(splitSentence, listB);

  return listACount === listBCount ? 'UNKNOWN' : listACount > listBCount ? 'URGENT' : 'NOT URGENT';
};

const countOccurances = (sentenceList, list) => {
  return sentenceList.reduce((acc, cur) => (list.includes(cur) ? acc + 1 : acc), 0);
};

const preProcessWordList = (wList, caseSensitive) => {
  return caseSensitive ? wList : wList.map((word) => word.toLowerCase());
};

const preProcessSentence = (sentence, caseSensitive) => {
  // remove punctuation and make array of words (optional lower case)
  return sentence.match(/\b[\w']+\b/g).map((word) => (caseSensitive ? word : word.toLowerCase()));
};

module.exports = classifyText;
