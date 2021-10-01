const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    const token = req.headers.Authorization
    if(!token) return res.status(401).json({message:'Please Login to continue'})

    try {
        const decoded = jwt.verify(token, process.env.JWT_AUTH_TOKEN)
        req.userId = decoded.id;
        next()
    } catch (error) {
        res.status(400).json({message:"You don't have permission to access."})
    }
}