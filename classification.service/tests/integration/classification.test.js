const request = require('supertest');
const httpStatus = require('http-status');
const app = require('../../src/app');

describe('Classification Routes', () => {
  describe('POST /v1/classify', () => {
    let options1 = { subWordInclusive: false, caseSensitive: true };

    // Test errors
    test('should return 400 error if no POST request body is supplied', async () => {
      await request(app).post('/v1/classify').send(null).expect(httpStatus.BAD_REQUEST);
    });

    test('should return 400 error if empty sentence is supplied in request body', async () => {
      await request(app).post('/v1/classify').send({ sentence: '' }).expect(httpStatus.BAD_REQUEST);
    });
    test('should return 400 error if no sentence is supplied in request body', async () => {
      await request(app).post('/v1/classify').send().expect(httpStatus.BAD_REQUEST);
    });

    // Test logic

    test('should return 200 and the supplied sentence with classification of URGENT', async () => {
      let sentence = 'Alert Alert Alert alert Nothing nothing';
      const res = await request(app)
        .post('/v1/classify')
        .send({ sentence: sentence, options: options1 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        result: expect.any(Object),
      });
      expect(res.body.result).toEqual({
        classy: expect.any(String),
        sentence: expect.any(String),
      });
      expect(res.body.result).toEqual({
        classy: 'URGENT',
        sentence: sentence,
      });
    });

    test('should return 200 and the supplied sentence with classification of NOT URGENT', async () => {
      let sentence = 'Nothing Nothing Good OK Alert Critical Critical';
      const res = await request(app)
        .post('/v1/classify')
        .send({ sentence: sentence, options: options1 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        result: expect.any(Object),
      });
      expect(res.body.result).toEqual({
        classy: expect.any(String),
        sentence: expect.any(String),
      });
      expect(res.body.result).toEqual({
        classy: 'NOT URGENT',
        sentence: sentence,
      });
    });

    test('should return 200 and the supplied sentence with classification of UNKNOWN', async () => {
      let sentence = 'Nothing Nothing Good Alert Critical Critical';
      const res = await request(app)
        .post('/v1/classify')
        .send({ sentence: sentence, options: options1 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        result: expect.any(Object),
      });
      expect(res.body.result).toEqual({
        classy: expect.any(String),
        sentence: expect.any(String),
      });
      expect(res.body.result).toEqual({
        classy: 'UNKNOWN',
        sentence: sentence,
      });
    });

    test('should return 200 and the supplied sentence (with no list words) with classification of UNKNOWN', async () => {
      let sentence = 'There was once a turtle named Stuart';
      const res = await request(app)
        .post('/v1/classify')
        .send({ sentence: sentence, options: options1 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        result: expect.any(Object),
      });
      expect(res.body.result).toEqual({
        classy: expect.any(String),
        sentence: expect.any(String),
      });
      expect(res.body.result).toEqual({
        classy: 'UNKNOWN',
        sentence: sentence,
      });
    });

    test('should return 200 and return NOT URGENT (ignoring the word "Alerting" as it is not exact match of Alert', async () => {
      let sentence = 'Alert Alert Alerting Nothing Nothing Nothing';
      const res = await request(app)
        .post('/v1/classify')
        .send({ sentence: sentence, options: options1 })
        .expect(httpStatus.OK);

      expect(res.body).toEqual({
        result: expect.any(Object),
      });
      expect(res.body.result).toEqual({
        classy: expect.any(String),
        sentence: expect.any(String),
      });
      expect(res.body.result).toEqual({
        classy: 'NOT URGENT',
        sentence: sentence,
      });
    });
  });
});
