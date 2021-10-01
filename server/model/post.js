const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const postSchema = new mongoose.Schema({
    title: {
        type: {
            type:String,
            trim: true
        },
        // required: [true, 'Title is required']
    },
    // message: {
    //     type: String,
    // },
    creator: {
        type: String,
        required: true
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

const validatePost = (req) => {
    const schema = Joi.object({
        title: Joi.string(),
        creator: Joi.objectId()
    })

    return schema.validate(req)
}

const Post = mongoose.model('Post', postSchema)

module.exports.Post = Post;
module.exports.validatePost = validatePost