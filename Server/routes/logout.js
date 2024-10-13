const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.clearCookie('token', { 
        secure: true, 
        httpOnly: true, 
        sameSite: 'Strict' 
    });
    res.status(200).json({ message: 'Logged out successfully' });
});

module.exports = router;
