// app.js
const express = require('express');
const cors = require('cors');
const jobsRoute = require('./routes/jobsRoute');
const userRoute = require('./routes/userRoute');
const app = express();
app.use(cors()); // Enable CORS
// Middleware to parse incoming JSON requests
app.use(express.json());

// Use the user routes
app.use('/', jobsRoute);
app.use('/', userRoute);

// Start the server
const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});