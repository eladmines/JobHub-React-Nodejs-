const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController')

router.get('/getPLStats', statsController.getPLstatsController);
router.get('/newJobsPerDayStats', statsController.getNewJobsPerDayStats);


module.exports = router;