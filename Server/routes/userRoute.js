const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware.js');
const userService = require('../controllers/userController.js');
const readFile = require('../utils/fileUtils.js');
const runGemini = require('../services/googleGenerativeAI.js');
const cvTextToObject = require('../utils/textUtils.js');

router.post('/cv', upload.single('cv'), async (req, res) => {

    try {
        const text = await readFile(req);
        const question = `Give me the next details: firstname,lastname,email,role , company ,experience and skills in the CV: ${text.text}  (give me the answer as a list)`;
        const ans = await runGemini(question);
        const cvTextToObjectVar = cvTextToObject(ans)
        res.status(200).json({ success: true, data: cvTextToObjectVar });
    } catch (error) {
        console.error("Error processing request:", error);
        res.status(500).json({ success: false, error: 'An error occurred while processing the request.' });
    }
});

router.post('/createuser', async (req, res) => {
    const signOut = await userService.createUser(req.body);
    res.status(200).json(signOut);
 });

module.exports = router;
