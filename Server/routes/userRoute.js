const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware.js');
const userController = require('../controllers/userController.js')

router.post('/createuser',userController.createUser);
router.post('/cv',upload.single('cv'),userController.cvAnalayze);


module.exports = router;
