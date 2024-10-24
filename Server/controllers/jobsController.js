const jobsServices = require('../services/jobsServices');

async function getJobs(req,res){

    try {
         const jobs = await jobsServices.getJobs(req.tokenExists,req.user);
        res.status(200).json(jobs);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

async function getJobsNoUserId(){
    const jobs = await jobsServices.getJobsNoUserId();
    return jobs;
}

// Controller
async function getSavedJobsNumber(req) { 
    try {

        const result = await jobsServices.getSavedJobsNumber(req); 
        return result; 
    } catch (error) {
        console.error("Error retrieving saved jobs count:", error);
        throw error; 
    }
}


async function getSavedJobs(req,res){
    try {
        const result = await jobsServices.getSavedJobs(req.user);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error fetching saved jobs:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

async function saveJob(req,res){
    try {
      const result = await jobsServices.saveJob(req.user, req.body['jobId']);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error saving job:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

async function removeSaveJob(req,res){
    try {
    
        const result = await jobsServices.removeSaveJob(req.user, req.body['jobId']);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error saving job:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = {
    getJobs,
    getSavedJobsNumber,
    getSavedJobs,
    saveJob,
    removeSaveJob,
};