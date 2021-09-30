const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        // required: [true, 'Title is required']
    },
    // message: {
    //     type: String,
    // },
    creator: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    selectedFile: String,
    likes: {
        type: Number,
        default: 0
    }
})

const Post = mongoose.model('Post', postSchema)

module.exports = Post;