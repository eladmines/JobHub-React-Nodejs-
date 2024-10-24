const express = require('express');
const applicationController = require('../controllers/applicationsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();


router.get('/getApplications', jwtValidation,applicationController.getApplications);
router.post('/saveApp', jwtValidation,applicationController.saveApp);
router.post('/deleteSaveApp', jwtValidation,applicationController.deleteSaveApp);
router.get('/getApplicationsByMonth', jwtValidation, applicationController.getApplicationsByMonth);


module.exports = router;
