require('dotenv').config();
const jwt = require('jsonwebtoken');

 function jwtValidation(req, res, next) {
    
    const jwtValidationCookie = req.cookies['token'];
    if (!jwtValidationCookie) {
        return res.status(401).json({ message: 'Token not found' });
    }

    try {
        const decoded = jwt.verify(jwtValidationCookie, process.env.ACCESS_TOKEN_SECRET);
        req.user = decoded; 
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = jwtValidation;