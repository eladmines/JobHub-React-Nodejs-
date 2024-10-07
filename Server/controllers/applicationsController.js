const applicationsModel = require('../models/applicationsModel');
async function getApplicationsCounter(id){
    const counterApplications = applicationsModel.getApplicationsCounter(id);
    return counterApplications;
}

module.exports = { getApplicationsCounter };