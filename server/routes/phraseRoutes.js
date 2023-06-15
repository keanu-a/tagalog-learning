const express = require('express');
const { getPhrase } = require('../controllers/phraseController.js');

const router = express.Router();

router.get('/:id', getPhrase);

module.exports = router;
