const jobsModel = require('../models/jobsModel');

async function getJobs(req,res){
    const jobs = await jobsModel.getAllJobs();
    return jobs;
}

module.exports = {
    getJobs,
};