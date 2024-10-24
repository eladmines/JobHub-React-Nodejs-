
const jobsController = require('./jobsController')
const applicationsController = require('./applicationsController');
const statsController = require('./statsController');

async function getMainData(req, res) {
    try {
        const savedJobsCounter = await jobsController.getSavedJobsNumber(req);
        const savedJobsCount = savedJobsCounter.length ? savedJobsCounter[0]['row_count'] : 0;
        

        const applicationCounter = await applicationsController.getApplicationsCounter(req);
        const applicationCount = applicationCounter.length ? applicationCounter[0]['row_count'] : 0;

       
        
        res.status(200).json({ savedJobsCount , applicationCount });
    } catch (error) {
        console.error("Error occurred:", error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


module.exports={
    getMainData
}

