const { User } = require("../model/user")
const bcrypt = require('bcrypt')
const Joi = require('joi')

module.exports.login = async (req, res) => {
    const { error } = await validate(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    const user = User.findOne({ email: req.body.email })
    if(!user) return res.status(400).send("Email or password doesn't match")

    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword) return res.status(400).send("Email or password doesn't match")

    const token = await user.generateAuthToken()
    res.header('x-auth-token', token)
}

function validate(req){
    const schema = Joi.object({
        email: Joi.string().min(2).max(50).email().required(),
        password: Joi.string().min(8).required()
    })

    return schema.validate(req)
}