const express = require('express');
const jobsController = require('../controllers/jobsController');
const applicationsController = require('../controllers/applicationsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();

router.get('/', jwtValidation, async (req, res) => {
    try {
        const savedJobsCounter = await jobsController.getSavedJobsNumber(req.user);
        const applicationsCounter = await applicationsController.getApplicationsCounter(req.user);

        const savedJobsCount = savedJobsCounter.length ? savedJobsCounter[0]['row_count'] : 0;
        const applicationCount = applicationsCounter.length ? applicationsCounter[0]['row_count'] : 0;

        res.status(200).json({ savedJobsCount, applicationCount });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
