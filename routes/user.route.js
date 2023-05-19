const express = require('express');
const router = express.Router();
const { createUser, removeUser } = require('../controllers/user.controller');

router.post('/users', createUser);

router.delete('/user/:id', removeUser);

module.exports = router;