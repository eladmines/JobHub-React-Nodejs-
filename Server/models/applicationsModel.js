const client = require('../config/db');

async function getApplicationsCounter(userId) {
  const query = `
    SELECT 
      COUNT(*) AS row_count 
    FROM 
      jobs_applicated 
    WHERE 
      user_id = $1;
  `;
  const values = [userId];
  const result = await client.query(query, values);
  
  return result.rows; 
}

module.exports = {
  getApplicationsCounter,
};
