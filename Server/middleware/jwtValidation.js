require('dotenv').config();
const jwt = require('jsonwebtoken');

 function jwtValidation(req, res, next) {
    
    const jwtValidationCookie = req.cookies['token'];
    if (!jwtValidationCookie) {
        req.tokenExists = false;
        return next();
    }

    try {
        const decoded = jwt.verify(jwtValidationCookie, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; 
        req.tokenExists = true;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = jwtValidation;