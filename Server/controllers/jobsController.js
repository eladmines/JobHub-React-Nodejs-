const jobsServices = require('../services/jobsServices');
async function getJobs(userId){
    const jobs = await jobsServices.getJobs(userId);
    return jobs;
}

async function getJobsNoUserId(){
    const jobs = await jobsServices.getJobsNoUserId();
    return jobs;
}

async function getSavedJobsNumber(req,res){
    const jobs = await jobsServices.getSavedJobsNumber(req);
    return jobs;
}

async function getSavedJobs(req,res){
    const jobs = await jobsServices.getSavedJobs(req);
    return jobs;
}

async function saveJob(userId,jobId){
    const jobs = await jobsServices.saveJob(userId,jobId);
    return jobs;
}

async function removeSaveJob(userId,jobId){
    const jobs = await jobsServices.removeSaveJob(userId,jobId);
    return jobs;
}

module.exports = {
    getJobs,
    getSavedJobsNumber,
    getSavedJobs,
    saveJob,
    removeSaveJob,
    getJobsNoUserId
};