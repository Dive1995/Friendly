const express = require('express');
const { signUp, getAllUsers, searchUsers } = require('../controler/user');
const router = express.Router()

router.get('/', getAllUsers)
router.post('/', signUp)
router.post('/search', searchUsers)


module.exports = router;