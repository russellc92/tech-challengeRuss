const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');
const wordList = require('../../src/data/wordLists.js');

describe('wordlist routes', () => {
  describe('GET /v1/wordlists', () => {
    let wordListData;

    beforeEach(() => {
      wordListData = wordList.wordList;
    });

    test('should return 200 and return correct data', async () => {
      const res = await request(app).get('/v1/wordlists').send().expect(httpStatus.OK);

      expect(res.body).toEqual({
        results: expect.any(Object),
      });
      expect(res.body.results).toEqual({
        wordList: expect.any(Object),
      });
      expect(res.body.results.wordList).toEqual({
        listA: expect.any(Array),
        listB: expect.any(Array),
        colors: expect.any(Object),
      });
      expect(res.body.results.wordList).toEqual({
        listA: wordListData.listA,
        listB: wordListData.listB,
        colors: wordListData.colors,
      });
    });
  });
});
