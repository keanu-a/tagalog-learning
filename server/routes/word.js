const express = require('express');
const { getWord } = require('../controllers/word.js');

const router = express.Router();

router.get('/:word', getWord);

module.exports = router;
