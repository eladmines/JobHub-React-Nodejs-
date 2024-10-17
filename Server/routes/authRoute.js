require('dotenv').config();
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtValidation = require('../middleware/jwtValidation');

router.post('/', async (req, res) => {
    try {
        const user = await authController.authLogin(req.body);
        if (user) {
            const accessToken = jwt.sign(user.id, process.env.ACCESS_TOKEN_SECRET);
            res.cookie('token', accessToken, {
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
                maxAge: 3600000 
            });
           
            return res.status(200).json({ success: true, user: user});
        } else {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


router.get('/jwtValidation', jwtValidation, (req, res) => {
    return res.status(200).json({
        message: 'JWT is valid',
        user: req.user
    });
});

module.exports = router;
