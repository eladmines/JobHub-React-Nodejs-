const applicationsServices = require('../services/applicationsServices');
async function getApplicationsCounter(id){
    const counterApplications = applicationsServices.getApplicationsCounter(id);
    return counterApplications;
}

async function getApplications(req,res){
    const apps = await applicationsServices.getApplications(req);
    return apps;
}

async function saveApp(userId,jobId){
    const jobs = await applicationsServices.saveApp(userId,jobId);
    return jobs;
}

async function deleteSaveApp(userId,jobId){
    const jobs = await applicationsServices.deleteSaveApp(userId,jobId);
    return jobs;
}

module.exports = { getApplicationsCounter ,getApplications,saveApp,deleteSaveApp};