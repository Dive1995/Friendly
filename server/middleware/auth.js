const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token')
    if(!token) return res.status(401).send('Please Login to continue')

    try {
        const payload = jwt.verify(token, process.env.JWT_AUTH_TOKEN)
        req.user = payload
        next()
    } catch (error) {
        res.status(400).send("You don't have permission to access.")
    }
}