const jobsModel = require('../models/jobsModel');

const saveJob = async (userId,jobId) => {
    const newUser = await jobsModel.saveJob(userId,jobId);
    return newUser;
  };

  const removeSaveJob = async (userId,jobId) => {
    const newUser = await jobsModel.removeSaveJob(userId,jobId);
    return newUser;
  };
  
  async function getJobs(userId){
   
    const jobs = await jobsModel.getAllJobs(userId);
    return jobs;
}

async function getJobsNoUserId(userId){
  const jobs = await jobsModel.getAllJobs(userId);
  return jobs;
}


async function getSavedJobs(req,res){
    const jobs = await jobsModel.getSavedJobs(req);
    return jobs;
}

async function getSavedJobsNumber(req,res){
    const jobs = await jobsModel.getSavedJobsNumber(req);
    return jobs;
}
module.exports = { getJobs,saveJob,getSavedJobsNumber,getSavedJobs,removeSaveJob,getJobsNoUserId };
       