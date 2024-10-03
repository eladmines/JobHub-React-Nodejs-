const authModel = require('../models/authModel');
const authLogin = async (userData) => {
    const newUser = await authModel.authLogin(userData);
    
    return newUser;
  };
  
module.exports = { authLogin };
       