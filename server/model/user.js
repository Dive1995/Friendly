const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Username is required."],
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    following: {
        type: [String],
        default: []
    },
    followers: {
        type: [String],
        default: []
    },
})

userSchema.methods.generateAuthToken = () => {
    return jwt.sign({ _id: this._id }, process.env.JWT_AUTH_TOKEN)
}


const User = mongoose.model('User', userSchema)


function validateUser(data){
    const schema = Joi.object({
        username: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(2).max(50).email().required(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}

module.exports.validateUser = validateUser
module.exports.User = User