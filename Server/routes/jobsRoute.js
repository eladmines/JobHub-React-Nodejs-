const express = require('express');
const jobsController = require('../controllers/jobsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();

router.get('/', jwtValidation,jobsController.getJobs);



router.get('/getSavedJobsNumber', jwtValidation, jobsController.getSavedJobsNumber);


router.get('/getSavedJobs', jwtValidation, jobsController.getSavedJobs);


router.post('/savejob', jwtValidation, jobsController.saveJob);
  

router.post('/removesavedjob', jwtValidation, jobsController.removeSaveJob);


module.exports = router;
