const express = require('express');
const router = express.Router();
const { profiles } = require('../controllers/profile.controller');

router.get('/profiles', profiles);

module.exports = router;