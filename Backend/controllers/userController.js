const userService = require('../services/userService');

async function createUser(user){
    const user1 = await userService.createUser(user);
    return user1;
}

module.exports = { createUser };