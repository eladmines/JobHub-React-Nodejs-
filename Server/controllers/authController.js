const authService = require('../services/authService');

async function authLogin(user){
    const user1 = await authService.authLogin(user);
    return user1;
}

module.exports = { authLogin };