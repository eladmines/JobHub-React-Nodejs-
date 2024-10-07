const client = require('../config/db');
const bcrypt = require('bcrypt');

async function authLogin(userData) {
  const query = 'SELECT * FROM users WHERE email = $1';
  
  try {
    const res = await client.query(query, [userData.username]);
    const user = res.rows[0];

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(userData.password, user.password);
    return isPasswordValid ? user.id : null;
  } catch (error) {
    console.error('Error during authentication:', error);
    throw error;
  }
}

module.exports = { authLogin };
