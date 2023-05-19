const express = require('express');
const router = express.Router();
const { subcarriers } = require('../controllers/subcarrier.controller');

router.get('/subcarriers', subcarriers);

module.exports = router;