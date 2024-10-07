const userService = require('../services/userService');

async function createUser(user){
    const res = await userService.createUser(user);
    return res;
}

async function getUserData(user){
    const userData = await userService.getUserData(user);
    return userData;
}

module.exports = { createUser,getUserData };