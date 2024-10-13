const multer = require('multer');
const fs = require('fs');

// Ensure the upload directory exists
const uploadDirectory = './test';
if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory, { recursive: true });
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDirectory); // Save files to the uploads directory
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Use a timestamp for the file name
    }
});

const upload = multer({ storage });

module.exports = upload;
