const statsModel = require('../models/statsModel');

async function statsPLService(){
    const res = statsModel.getPLstats();
    return res;
}

module.exports= {statsPLService}