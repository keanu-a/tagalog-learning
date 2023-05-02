const express = require('express');
const { getPhrase } = require('../controllers/phrase.js');

const router = express.Router();

router.get('/:id', getPhrase);

module.exports = router;
