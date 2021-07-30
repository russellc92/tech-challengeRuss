const express = require('express');
const wordListController = require('../../controllers/words.controller');

const router = express.Router();

router.route('/').get(wordListController.getWords);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: WordLists
 *   description: word list management and retrieval
 */

/**
 * @swagger
 * /wordlists:
 *   get:
 *     summary: Get all word lists
 *     description: Used for text classification
 *     tags: [WordLists]
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  results:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/WordList'
 */
