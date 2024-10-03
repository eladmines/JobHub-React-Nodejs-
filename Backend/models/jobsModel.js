const client = require('../config/db');

async function getAllJobs(){
 const query = "SELECT * FROM JOBS ";
 const rows = await client.query(query);
 return rows.rows; 
}

module.exports = {
    getAllJobs
};


