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
   
    
    const query = `
      DELETE FROM jobs_applicated 
WHERE user_id = $1
AND job_id = $2;
    `;
    const values = [userId, jobId];
    await client.query(query, values);
  }

  async function getApplicationsByMonth(userId) {
    const query =  `
   SELECT 
    EXTRACT(YEAR FROM date) AS year,
    EXTRACT(MONTH FROM date) AS month,
    EXTRACT(DAY FROM date) AS day,
    COUNT(*) AS rows_inserted
FROM 
    jobs_applicated
WHERE 
    user_id = $1
GROUP BY 
    EXTRACT(YEAR FROM date), 
    EXTRACT(MONTH FROM date), 
    EXTRACT(DAY FROM date)
ORDER BY 
    year, month, day;

    `
    const values = [userId];
    const result = await client.query(query, values);

 
    
    const month = new Date().getMonth() + 1; // Get current month (1-based)
const dict = [
  { name: "August", data: Array(31).fill(0) }, // Two months ago
  { name: "Septembe", data: Array(31).fill(0) },  // One month ago
  { name: "OCtober", data: Array(31).fill(0) },  // Current month
];



result.rows.forEach((item) => {
  const monthInt = parseInt(item.month, 10);  // Extract the month as an integer
  const dayInt = parseInt(item.day, 10);      // Extract the day as an integer
  const rowsInserted = parseInt(item.rows_inserted, 10);  // Extract rows_inserted

  // Map the month value to the correct index in dict
  let dictIndex = null;
  if (monthInt === month - 2) dictIndex = 0;  // Two months ago
  else if (monthInt === month - 1) dictIndex = 1;  // One month ago
  else if (monthInt === month) dictIndex = 2;  // Current month

  // Update the correct day in the corresponding month
  if (dictIndex !== null && dayInt > 0 && dayInt <= 31) {
    dict[dictIndex].data[dayInt - 1] = rowsInserted;
  }
});
return dict;
  }



  async function getRecommendedJobs(userId) {
    const query = `
      SELECT * FROM 
    `;
    const values = [userId];
    const result = await client.query(query, values);
    
    return result.rows; 
  }

module.exports = {
  getApplicationsCounter,
  getApplications,
  saveApp,
  deleteSaveApp,
  getApplicationsByMonth
};
