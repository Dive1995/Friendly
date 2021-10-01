const express = require('express')
const { getPosts, createPost, deletePost, updatePost, getSinglePost, updateLike } = require('../controler/post')
const auth = require('../middleware/auth')
const router = express.Router()

router.get('/', getPosts)
router.post('/', auth, createPost)
router.get('/:id', getSinglePost)
router.delete('/:id', auth, deletePost)
router.patch('/:id', auth, updatePost)
router.patch('/:id/likepost', auth, updateLike)

module.exports = router