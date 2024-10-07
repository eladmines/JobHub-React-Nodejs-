const jobsModel = require('../models/jobsModel');

async function getJobs(req,res){
    const jobs = await jobsModel.getAllJobs();
    return jobs;
}

async function getSavedJobsNumber(req,res){
    const jobs = await jobsModel.getSavedJobsNumber(req);
    return jobs;
}

module.exports = {
    getJobs,
    getSavedJobsNumber,
};