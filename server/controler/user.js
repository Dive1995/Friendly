const {User, validateUser} = require("../model/user")
const _ = require('lodash')
const bcrypt = require('bcrypt')


module.exports.createUser = async (req, res) =>  {
    const {error} = await validateUser(req.body)
    if(error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email })
    if(user) return res.status(400).send('User already exist')

    user = await User(_.pick(req.body, ['username', 'email', 'password']))
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    user.password = hashedPassword;
    user.save()

    console.log(user);

    // generate auth token
    const token = await user.generateAuthToken()
    res.header('x-auth-token', token).send(user)
    // res.json(user)
}

module.exports.getAllUsers = async (req, res) => {
    const users = await User.find()
    res.json(users)
}