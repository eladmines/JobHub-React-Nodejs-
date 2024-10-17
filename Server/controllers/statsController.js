const statsService = require('../services/statsService')

async function getPLstatsController(){
    const getPLstatsService = statsService.statsPLService();
    return getPLstatsService;
}

module.exports = {getPLstatsController}