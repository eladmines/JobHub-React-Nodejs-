const client = require('../config/db');
const bcrypt = require('bcrypt');


async function createUser(userData) {
  const hashedPassword = await bcrypt.hash(userData['password'][0], 10);

  const query = `
 WITH ins AS (
  INSERT INTO users (firstName, lastName, email, password, experience, role, company, skills)
  VALUES ($3, $4, $1, $2, $5, $6, $7, $8::text[])
  ON CONFLICT (email) DO NOTHING
  RETURNING true AS inserted
)
SELECT COALESCE((SELECT inserted FROM ins), false) AS inserted;

  `;

  
  const values = [
    userData['username'][0],
    hashedPassword,    
    userData['FirstName'], 
    userData['LastName'], 
    userData['Experience'],  
    userData['Role'],       
    userData['Company'],    
    userData['Languages'],
  ];

  try {
    const result = await client.query(query, values);
    return result.rows[0]['inserted'];
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
