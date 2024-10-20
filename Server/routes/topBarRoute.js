const express = require('express');
const router = express.Router();
const jwtValidation = require('../middleware/jwtValidation');
const userController = require('../controllers/userController');

router.get('/', jwtValidation, async (req, res) => {
    try {
      const userData = await userController.getUserData(req.user);
      res.status(200).json(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
      res.status(500).json({ message: 'Failed to fetch user data', error: error.message });
    }
  });
  
module.exports = router;

