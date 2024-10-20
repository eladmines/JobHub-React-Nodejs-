const express = require('express');
const applicationController = require('../controllers/applicationsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();


router.get('/getApplications', jwtValidation, async (req, res) => {
  try {
    const result = await applicationController.getApplications(req.user);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/saveApp', jwtValidation, async (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    return res.status(400).json({ message: 'Job ID is required' });
  }

  try {
    const result = await applicationController.saveApp(req.user, jobId);
    res.status(200).json(result);
  } catch (error) {
    console.error('Error saving application:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


router.post('/deleteSaveApp', jwtValidation, async (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    return res.status(400).json({ message: 'Job ID is required' });
  } 

  try {
    const result = await applicationController.deleteSaveApp(req.user, jobId);
    console.log(result,result)
    res.status(200).json(result);
  } catch (error) {
    console.error('Error deleting saved application:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/getApplicationsByMonth', jwtValidation, async (req, res) => {
  try {
    
    const result = await applicationController.getApplicationsByMonth(req.user);

    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching applications:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
