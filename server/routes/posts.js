const express = require('express')
const { getPosts, createPost, deletePost, updatePost, getSinglePost } = require('../controler/post')
const router = express.Router()

router.get('/', getPosts)
router.post('/', createPost)
router.get('/:id', getSinglePost)
router.delete('/:id', deletePost)
router.patch('/:id', updatePost)

module.exports = router