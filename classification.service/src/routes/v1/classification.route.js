const express = require('express');
const validate = require('../../middlewares/validate');
//const classificationValidation = require('../../validations/classification.validation');
const classificationController = require('../../controllers/classification.controller');

const router = express.Router();

/**
 * See README.md for justification on POST instead of GET here.
 */
router.route('/').post(/** validate(classificationValidation.classifySentence),*/ classificationController.classifySentence);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Classification
 *   description: Sentence classification
 */

/**
 * @swagger
 * /classify:
 *   post:
 *     summary: Classify a sentence
 *     tags: [Classification]
 *     description: Given a sentense, classify it against preconfigured word lists
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sentence
 *               - caseSensitive
 *               - subWordInclusive
 *             properties:
 *               sentence:
 *                 type: string
 *               caseSensitive:
 *                 type: boolean
 *               subWordInclusive:
 *                 type: boolean
 *             example:
 *               sentence: the cat in the hat
 *               caseSensitive: false
 *               subWordInclusive: false
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Classification'
 */
