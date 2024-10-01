const authModel = require('../models/userModel');

async function auth(req,res){
    const jobs = await jobsModel.getAllJobs();
    return jobs;
}

module.exports = {
    getJobs,
};