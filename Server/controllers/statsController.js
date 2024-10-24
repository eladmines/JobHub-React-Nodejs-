const statsService = require('../services/statsService')

async function getPLstatsController(req,res){
    try{
        const getPLstats = await statsService.statsPLService();
        res.status(200).json(getPLstats);
    }catch(error){
        console.error("Error occured",error);
        res.status(500).json({message : "Internal Serer Error"})
    }
}

async function getNewJobsPerDayStats(req,res){
    try{
        const getNewJobsPerDayStats = await statsService.getNewJobsPerDayStatsService();
        res.status(200).json(getNewJobsPerDayStats)
    }catch(error){
        console.error("Error occured",error);
        res.status(500).json({message : "Internal Serer Error"})
    }
    
}

module.exports = {getPLstatsController,getNewJobsPerDayStats}