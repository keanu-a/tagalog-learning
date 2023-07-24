const express = require('express');
const {
  getWord,
  getRelatedWords,
} = require('../controllers/wordController.js');

const router = express.Router();

router.get('/:word', getWord);
router.get('/related/:root', getRelatedWords);

module.exports = router;
