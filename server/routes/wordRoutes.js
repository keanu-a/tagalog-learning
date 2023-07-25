const express = require('express');
const { getWord, getWords } = require('../controllers/wordController.js');

const router = express.Router();

router.get('/:word', getWord);
router.get('/search/:query', getWords);

module.exports = router;
