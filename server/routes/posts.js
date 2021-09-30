const express = require('express')
const { getPosts, createPost, deletePost, updatePost, getSinglePost, updateLike } = require('../controler/post')
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', getSinglePost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)
router.patch('/:id/likepost', updateLike)

module.exports = router