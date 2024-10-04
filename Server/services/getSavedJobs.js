const getSavedJobsModel = require('../models/getSavedJobsModel');
const getSavedJobs = async (userData) => {
    const newUser = await getSavedJobsModel.getSavedJobs(id);
    return newUser;
  };
  
module.exports = { getSavedJobs };