const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        // console.log(req.headers);
        const token = req.headers.authorization.split(' ')[1]
        if(!token) return res.status(401).json({message:'Please Login to continue'})
        const decoded = jwt.verify(token, process.env.JWT_AUTH_TOKEN)
        req.userId = decoded.id;
        console.log({userId:req.userId});
        next()
    } catch (error) {
        res.status(400).json({message:"You don't have permission to access."})
    }
}