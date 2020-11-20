const express = require('express');
const router = express.Router();
const apptCont = require('../controllers/appointmentControlller');

router.post('/getAutoSearch', apptCont.autoSearch);

module.exports = router;