require('dotenv').config();
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.post('/auth', async (req, res) => {
    try {
        const respond = await authController.authLogin(req.body);
        if (respond) {
            const accessToken = jwt.sign(respond, process.env.ACCESS_TOKEN_SECRET);
            res.cookie('token', accessToken, {
                httpOnly: true, 
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'Strict',
                maxAge: 3600000
            });
            return res.status(200).json({ success: true, message: 'Authentication successful' });
        } else {
            return res.status(401).json({ success: false, message: 'Authentication failed' });
        }
    } catch (error) {
        console.error("Error during authentication:", error);
        return res.status(500).json({ success: false, message: 'Internal server error' });
    }
});


module.exports = router;
