const mongoose = require('mongoose')
const Joi = require('joi')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "First name is required."],
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
        minlength: 2,
        maxlength: 50,
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true
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

userSchema.methods.generateAuthToken = function(){
    return jwt.sign({ id: this._id, email: this.email }, process.env.JWT_AUTH_TOKEN, { expiresIn: "7d"})
}


const User = mongoose.model('User', userSchema)


function validateUser(data){
    const schema = Joi.object({
        firstName: Joi.string().min(2).max(50).required(),
        lastName: Joi.string().min(2).max(50).required(),
        email: Joi.string().min(2).max(50).email().required(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(data)
}

module.exports.userSchema = userSchema
module.exports.validateUser = validateUser
module.exports.User = User