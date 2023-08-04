const express = require('express');
const { getAudio } = require('../controllers/audioController.js');

const router = express.Router();

router.get('/:audioUrl', getAudio);

module.exports = router;
