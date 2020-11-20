const express = require('express');
const router = express.Router();
const autoComplete = require('../controllers/autoComplete');

router.post('/getAutoSearch', autoComplete.autoSearch);

module.exports = router;