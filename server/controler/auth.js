const { User } = require("../model/user")
const bcrypt = require('bcrypt')
const Joi = require('joi')
const _ = require('lodash')

module.exports.login = async (req, res) => {
    const { error } = validate(req.body)
    if(error) return res.status(400).json({message: error.details[0].message})

    const user = await User.findOne({ email: req.body.email })
    if(!user) return res.status(400).json({message: "Invalid email or password."})

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).json({message: "Invalid email or password."})
    
    const token = await user.generateAuthToken()

    const userData = _.pick(user, ["_id", "email", "firstName", "lastName"])
    res.json({user:userData, token})
}

function validate(req){
    const schema = Joi.object({
        email: Joi.string().max(50).email().required(),
        password: Joi.string().required()
    }).unknown(true)

    return schema.validate(req)
}