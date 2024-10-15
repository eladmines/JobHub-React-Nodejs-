const applicationsModel = require('../models/applicationsModel');
async function saveApp(userId,jobId){
    const jobs = await applicationsModel.saveApp(userId,jobId)
    return jobs;
}

async function deleteSaveApp(userId,jobId){
    const jobs = await applicationsModel.deleteSaveApp(userId,jobId)
    return jobs;
}

async function getApplicationsCounter(id){
    const counterApplications = applicationsModel.getApplicationsCounter(id);
    return counterApplications;
}

async function getApplications(req,res){
    const apps = await applicationsModel.getApplications(req);
    return apps;
}

async function getApplicationsByMonth(req,res){
    const apps = await applicationsModel.getApplicationsByMonth(req);
    return apps;
}

  
module.exports = { saveApp,getApplicationsCounter,getApplications,deleteSaveApp,getApplicationsByMonth };
       