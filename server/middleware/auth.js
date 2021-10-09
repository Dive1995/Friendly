const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        if(!token) return res.status(401).json({message:'Please Login to continue'})

        const isCustomeAuth = token.length < 500;

        let decoded;
        if(token && isCustomeAuth){
            decoded = jwt.verify(token, process.env.JWT_AUTH_TOKEN)
            req.userId = decoded?.id;
        }else{
            decoded = jwt.decode(token)
            req.userId = decoded?.sub;
        }


        next()
    } catch (error) {
        res.status(403).json({message:"Please sign in / sign up."})
    }
}