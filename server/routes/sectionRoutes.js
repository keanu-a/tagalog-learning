const express = require('express');
const { getSection } = require('../controllers/sectionController.js');

const router = express.Router();

router.get('/:sectionTitle', getSection);

module.exports = router;
