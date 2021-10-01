const {User, validateUser} = require("../model/user")
const _ = require('lodash')
const bcrypt = require('bcrypt')


module.exports.signUp = async (req, res) =>  {
    const {error} = validateUser(req.body)
    if(error) return res.status(400).json({message: error.details[0].message})

    let user = await User.findOne({ email: req.body.email })
    if(user) return res.status(400).json({message: 'User already exist'})

    user = await User(_.pick(req.body, ['firstName','lastName', 'email', 'password']))
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    user.password = hashedPassword;
    user.save()

    // generate auth token
    const token = await user.generateAuthToken()
    const userData = _.pick(user, ["email", "firstName", "lastName"])
    res.json({user: userData, token})
    // res.json(user)
}

module.exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}