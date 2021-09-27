const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    message: {
        type: String,
    },
    creater: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;