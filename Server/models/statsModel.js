const client = require('../config/db');
const months = require('../Constants');

async function getPLstats() {
    const query = `SELECT * FROM pl_stats;`;
    const result = await client.query(query);
    return result.rows;
}

async function getNewJobsPerDayStatsModel() {
    const query = `
        SELECT 
            EXTRACT(YEAR FROM date_posted) AS year,
            EXTRACT(MONTH FROM date_posted) AS month,
            EXTRACT(DAY FROM date_posted) AS day,
            jobs_number
        FROM 
            news_jobs
        ORDER BY 
            year, month, day;
    `;

    const result = await client.query(query);

    const currentMonth = new Date().getMonth() + 1; 

    const dict = [
        { name: months[currentMonth - 3], data: Array(31).fill(0) }, 
        { name: months[currentMonth - 2], data: Array(31).fill(0) }, 
        { name: months[currentMonth - 1], data: Array(31).fill(0) },
    ];

    result.rows.forEach((item) => {
        const monthInt = parseInt(item.month, 10);
        const dayInt = parseInt(item.day, 10);
        const jobs_number = parseInt(item.jobs_number, 10);
        

        let dictIndex = null;
        if (monthInt === currentMonth - 2) dictIndex = 0;  
        else if (monthInt === currentMonth - 1) dictIndex = 1;  
        else if (monthInt === currentMonth) dictIndex = 2;

        if (dictIndex !== null && dayInt > 0 && dayInt <= 31) {
            dict[dictIndex].data[dayInt - 1] = jobs_number;
        }
    });

    return dict;
}


module.exports = { getPLstats, getNewJobsPerDayStatsModel };
