const express = require('express');
const jobsController = require('../controllers/jobsController');
const jwtValidation = require('../middleware/jwtValidation');
const router = express.Router();

router.get('/', jwtValidation, async (req, res) => {
    try {
        const result = await jobsController.getSavedJobsNumber(req.user);
        res.status(200).json(result[0]['row_count']);
    } catch (error) {
        console.error("Error retrieving saved jobs count:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
