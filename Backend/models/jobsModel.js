const sequelize = require('../config/db');

async function getAllJobs(){
 const query = "SELECT * FROM JOBS ";
 const [rows] = await sequelize.query(query);
 return rows; 
}

module.exports = {
    getAllJobs
};


