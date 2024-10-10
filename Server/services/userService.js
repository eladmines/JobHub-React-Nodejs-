const userModel = require('../models/userModel');
const createUser = async (userData) => {
    const newUser = await userModel.createUser(userData);
    return newUser;
  };
  
  const getUserData = async (userData) => {
    const user = await userModel.getUserName(userData);
    return user;
  };
  
module.exports = { createUser,getUserData };
       
