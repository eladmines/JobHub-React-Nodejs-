const express = require('express');
const jobsController = require('../controllers/jobsController');

const router = express.Router();

router.get('/getJobs', async (req, res) => {
    const jobs = await jobsController.getJobs();
    res.status(200).json(jobs);
  
});

router.post('/', async (req, res) => {
    const jobs = await jobsController.getJobs();
    res.status(200).json(jobs);
});

module.exports = router;
