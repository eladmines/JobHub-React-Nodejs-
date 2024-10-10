const cvTextToObject = function cvTextToObject(text) {
    const result = {};
    const lines = text.split('\n');
    lines.forEach(line => {
        const cleanLine = line.replace(/^\*\s*|- /, '').trim();
        const [key, value] = cleanLine.split(':').map(part => part.trim());
        if (key && value) {
            result[key] = value;
        }
    });
    return result;
}

module.exports = cvTextToObject;
