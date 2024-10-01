const sequelize = require('../config/db');
const bcrypt = require('bcrypt');


async function createUser(userData) {

  const hashedPassword = await bcrypt.hash(userData['password'], 10);
  const query = `
    INSERT INTO users (firstName, lastName, email, password, experience, role, company, skills)
    VALUES ('', '', $1, $2, $3, $4, $5, $6::text[])
    ON CONFLICT (email) DO NOTHING;
  `;

  const values = [
    userData['username'],   
    hashedPassword,    
    userData['experience'],  
    userData['role'],       
    userData['company'],    
    userData['skills'],     
  ];

  try {
      const [result] = await sequelize.query(query, {
          bind: values, 
          type: sequelize.QueryTypes.INSERT
      });

      return result.length ? result[0].id : null;
  } catch (error) {
      console.error("Error inserting user:", error);
      throw error;
  }
}


module.exports = { createUser };
