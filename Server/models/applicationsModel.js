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


async function getApplications(userId) {
    const query = `
      SELECT 
    jobs.*,
    CASE WHEN jobs_saved.job_id IS NOT NULL THEN 1 ELSE 0 END AS saved,
    jobs_applicated.date AS applicated_date
FROM 
    jobs
LEFT JOIN 
    jobs_saved ON jobs.job_id = jobs_saved.job_id 
    AND jobs_saved.user_id = $1
LEFT JOIN 
    jobs_applicated ON jobs.job_id = jobs_applicated.job_id 
    AND jobs_applicated.user_id = $1
WHERE 
    jobs_applicated.job_id IS NOT NULL 
    AND jobs_applicated.job_id = jobs.job_id`
    const values = [userId];
    const result = await client.query(query, values);
    return result.rows; 
  };

  async function saveApp(userId, jobId) {
    const query = `
      INSERT INTO jobs_applicated (user_id, job_id)
      VALUES ($1, $2)
      ON CONFLICT (user_id, job_id) DO NOTHING
    `;
    const values = [userId, jobId];
    await client.query(query, values);
  }

  async function deleteSaveApp(userId, jobId) {
    console.log("userId",userId,"jobId",jobId)
    const query = `
      DELETE FROM jobs_applicated 
WHERE user_id = $1
AND job_id = $2;
    `;
    const values = [userId, jobId];
    await client.query(query, values);
  }


module.exports = {
  getApplicationsCounter,
  getApplications,
  saveApp,
  deleteSaveApp
};
