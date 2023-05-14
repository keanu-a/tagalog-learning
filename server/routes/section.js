const express = require('express');
const { getSection } = require('../controllers/section.js');

const router = express.Router();

router.get('/:sectionTitle', getSection);

module.exports = router;
