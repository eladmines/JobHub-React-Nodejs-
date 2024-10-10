const fs = require('fs')
const pdf = require('pdf-parse')

const readFile = async function readFile(req){
    const filePath = req.file ? req.file.path : null;
    if(filePath){
        const data = fs.readFileSync(filePath);
        var textData = await pdf(data);
    }
    return textData;
}

module.exports = readFile;