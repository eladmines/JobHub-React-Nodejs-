const statsModel = require('../models/statsModel');

async function statsPLService(){
    const res = statsModel.getPLstats();
    return res;
}

async function getNewJobsPerDayStatsService(){
    const res = statsModel.getNewJobsPerDayStatsModel();
    return res;
}


module.exports= {statsPLService,getNewJobsPerDayStatsService}