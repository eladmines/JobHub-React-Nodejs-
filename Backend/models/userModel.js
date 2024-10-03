const client = require('../config/db');
const bcrypt = require('bcrypt');

async function createUser(userData) {
  const hashedPassword = await bcrypt.hash(userData['password'], 10);

  const query = `
    INSERT INTO users (firstName, lastName, email, password, experience, role, company, skills)
    VALUES ('', '', $1, $2, $3, $4, $5, $6::text[])
    ON CONFLICT (email) DO NOTHING;
  `;

  const values = [
    userData['email'],
    hashedPassword,    
    userData['experience'],  
    userData['role'],       
    userData['company'],    
    userData['skills'],
  ];

  try {
      const result = await client.query(query, values);
      return result.rowCount > 0 ? result.rows[0]?.id : null;
  } catch (error) {
      console.error("Error inserting user:", error);
      throw error;
  }
}

module.exports = { createUser };
