const jobsModel = require('../models/jobsModel');

const saveJob = async (userId,jobId) => {
    const newUser = await jobsModel.saveJob(userId,jobId);
    return newUser;
  };

  const removeSaveJob = async (userId,jobId) => {
    const newUser = await jobsModel.removeSaveJob(userId,jobId);
    return newUser;
  };
  
  async function getJobs(jwtValid,userId){
    var jobs;
   if(jwtValid){
     jobs = await jobsModel.getAllJobs(userId);
   }
   else{
     jobs = await jobsModel.getAllJobs(userId);
   }
    return jobs;
}



async function getSavedJobs(req,res){
    const jobs = await jobsModel.getSavedJobs(req);
    return jobs;
}

async function getSavedJobsNumber(req){
    const jobs = await jobsModel.getSavedJobsNumber(req.user);
    return jobs;
}
module.exports = { getJobs,saveJob,getSavedJobsNumber,getSavedJobs,removeSaveJob };
       