const userModel = require('../models/userModel');
const createUser = async (userData) => {
    const newUser = await userModel.createUser(userData);
    return newUser;
  };
  
module.exports = { createUser };
       
