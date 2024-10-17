const express = require('express');
const jobsController = require('../controllers/jobsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();

router.get('/', jwtValidation,async (req, res) => {
  
  try {
    var jobs;
    if(req.tokenExists){
      jobs = await jobsController.getJobs(req.user);
    }else{
      jobs = await jobsController.getJobsNoUserId()
    }
    console.log(req.user)
    res.status(200).json(jobs);
    
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/getSavedJobsNumber', jwtValidation, async (req, res) => {
  try {
    const result = await jobsController.getSavedJobsNumber(req.user);
    res.status(200).json(result[0]['row_count']);
  } catch (error) {
    console.error('Error fetching saved jobs number:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.get('/getSavedJobs', jwtValidation, async (req, res) => {
  try {
    const result = await jobsController.getSavedJobs(req.user);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching saved jobs:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/savejob', jwtValidation, async (req, res) => {
  try {
    const result = await jobsController.saveJob(req.user, req.body['jobId']);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/removesavedjob', jwtValidation, async (req, res) => {
  try {
    
    const result = await jobsController.removeSaveJob(req.user, req.body['jobId']);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error saving job:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
