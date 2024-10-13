const client = require('../config/db');
const bcrypt = require('bcrypt');


async function createUser(userData) {
  console.log("pass",userData['password'][0])
  const hashedPassword = await bcrypt.hash(userData['password'][0], 10);

  const query = `
    INSERT INTO users (firstName, lastName, email, password, experience, role, company, skills)
    VALUES ('', '', $1, $2, $3, $4, $5, $6::text[])
    ON CONFLICT (email) DO NOTHING;
  `;

  const values = [
    userData['username'][0],
    hashedPassword,    
    userData['Experience'],  
    userData['Role'],       
    userData['Company'],    
    userData['Languages'],
  ];

  try {
    const result = await client.query(query, values);
    return result.rowCount > 0 ? result.rows[0]?.id : null;
  } catch (error) {
    console.error("Error inserting user:", error);
    throw error; 
  }
}

async function getUserName(id) {
  const query = `
    SELECT firstname, lastname, role 
    FROM users 
    WHERE id = $1;
  `;

  const values = [id];

  try {
    const result = await client.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error retrieving user:", error);
    throw error;
  }
}

module.exports = { createUser, getUserName };
