require('dotenv').config();
const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();
const jwt = require('jsonwebtoken');
const jwtValidation = require('../middleware/jwtValidation');

router.post('/', authController.authLogin);

router.get('/jwtValidation', jwtValidation, (req, res) => {
    return res.status(200).json({
        message: 'JWT is valid',
        user: req.user
    });
});

module.exports = router;
