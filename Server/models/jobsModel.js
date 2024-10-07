const client = require('../config/db');


async function getAllJobs() {
  const query = "SELECT * FROM JOBS";
  const result = await client.query(query);
  return result.rows; 
}


async function getSavedJobsNumber(userId) {
  const query = `
    SELECT COUNT(*) AS row_count 
    FROM jobs_saved 
    WHERE user_id = $1
  `;
  const values = [userId];
  const result = await client.query(query, values);
  return result.rows; 
}


async function getSavedJobs(userId) {
  const query = `
    SELECT 
      jobs.*, 
      CASE 
        WHEN jobs_saved.job_id IS NOT NULL THEN 1 
        ELSE 0 
      END AS saved, 
      jobs_applicated.date AS applicated_date
    FROM 
      jobs
    LEFT JOIN 
      jobs_saved ON jobs.job_id = jobs_saved.job_id AND jobs_saved.user_id = $1
    LEFT JOIN 
      jobs_applicated ON jobs.job_id = jobs_applicated.job_id AND jobs_applicated.user_id = $1
    WHERE 
      jobs_saved.job_id IS NOT NULL
  `;
  const values = [userId];
  const result = await client.query(query, values);
  return result.rows; 
}


async function saveJob(userId, jobId) {
  const query = `
    INSERT INTO jobs_saved (user_id, job_id)
    VALUES ($1, $2)
    ON CONFLICT (user_id, job_id) DO NOTHING
  `;
  const values = [userId, jobId];
  await client.query(query, values);
}

// Exporting functions
module.exports = {
  getAllJobs,
  getSavedJobsNumber,
  getSavedJobs,
  saveJob
};
