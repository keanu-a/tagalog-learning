const express = require('express');
const { getLesson } = require('../controllers/lessonController.js');

const router = express.Router();

router.get('/:lessonTitle', getLesson);

module.exports = router;
