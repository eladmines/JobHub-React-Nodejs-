const client = require('../config/db');

async function getPLstats(){
    const query = `
    SELECT * FROM pl_stats;
    `
    const result = await client.query(query);
    
    return result.rows;


}





module.exports = {getPLstats};