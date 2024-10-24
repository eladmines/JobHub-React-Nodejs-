const userService = require('../services/userService');
const readFile = require('../utils/fileUtils.js');
const runGemini = require('../services/googleGenerativeAI.js');
const cvTextToObject = require('../utils/textUtils.js');

async function createUser(req,res){
    try {
        const respond = await userService.createUser(req.body);
        res.status(200).json(respond);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ success: false, error: 'An error occurred while creating the user.' });
    }
}

async function cvAnalayze(req,res){
    try {
        const text = await readFile(req);
        const question = `
            You are an AI specialized in processing CVs to extract relevant information. Given the CV text below, please extract the following details and return them in a dictionary format:
            
            - FirstName
            - LastName
            - Email
            - Role
            - Company
            - TotalYearsofExperience
            - ProgrammingLanguages
            - Technologies
            
            Here is the CV text:
            
            ${text.text}
            
            Return the extracted information as a list without using quotes around the keys.
        `;

        const ans = await runGemini(question);
        const cvTextToObjectVar = cvTextToObject(ans);
        res.status(200).json({ success: true, data: cvTextToObjectVar });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ success: false, error: 'An error occurred while processing the request.' });
    }
}

async function getUserData(user){
    const userData = await userService.getUserData(user);
    return userData;
}

module.exports = { createUser,getUserData ,cvAnalayze};