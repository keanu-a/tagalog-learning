const express = require('express');
const {
  getWord,
  getWords,
  createWord,
} = require('../controllers/wordController.js');

const router = express.Router();

router.get('/:word', getWord);
router.get('/search/:query', getWords);
router.post('/create', createWord);

module.exports = router;
