const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const jobsRoute = require('./routes/jobsRoute');
const userRoute = require('./routes/userRoute');
const authRoute = require('./routes/authRoute');
const jwtRoute = require('./routes/jwtRoute');
const app = express();
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use(cookieParser());
app.use('/', jobsRoute);
app.use('/', userRoute);
app.use('/', authRoute);
app.use('/', jwtRoute);

const PORT =  5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});