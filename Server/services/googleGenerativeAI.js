const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI('AIzaSyDaTEfpnp2jMB92RZ-lYc1oECJwJ3rALHI');

const runGemini = async function run(question) {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = question;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return text;
}

module.exports = runGemini;
