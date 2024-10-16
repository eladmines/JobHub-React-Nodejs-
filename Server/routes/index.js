const express = require('express');
const router = express.Router();

const jobsRoute = require('./jobsRoute');
const userRoute = require('./userRoute');
const authRoute = require('./authRoute');
const logoutRoute = require('./logout');
const mainRoute = require('./mainRoute');
const topBarRoute = require('./topBarRoute');
const applicationsRoute = require('./applicationsRoute');
const statsRoute = require('./statsRoute');

router.use('/jobs', jobsRoute);
router.use('/user', userRoute);
router.use('/auth', authRoute);
router.use('/logout', logoutRoute);
router.use('/main', mainRoute);
router.use('/topbar', topBarRoute);
router.use('/applications', applicationsRoute);
router.use('/stats',statsRoute );
module.exports = router;
