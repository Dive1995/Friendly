const mongoose = require('mongoose')
const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const postSchema = new mongoose.Schema({
    title: {
        type:String,
        trim: true
    },
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
        type: [String],
        default: []
    }
})

const validatePost = (req) => {
    const schema = Joi.object({
        title: Joi.string().trim(),
        creator: Joi.objectId(),
        selectedFile: Joi.string().empty('')
    }).unknown(true)

    return schema.validate(req)
}

const Post = mongoose.model('Post', postSchema)

module.exports.Post = Post;
module.exports.validatePost = validatePost