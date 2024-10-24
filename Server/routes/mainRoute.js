const express = require('express');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get('/', jwtValidation, mainController.getMainData);

module.exports = router;
