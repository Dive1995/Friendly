const express = require('express');
const { signUp, getAllUsers } = require('../controler/user');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/', signUp)


module.exports = router;