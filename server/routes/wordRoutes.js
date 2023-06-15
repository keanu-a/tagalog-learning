const express = require('express');
const { getWord } = require('../controllers/wordController.js');

const router = express.Router();

router.get('/:word', getWord);

module.exports = router;
