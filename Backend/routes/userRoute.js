const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post('/createUser', async (req, res) => {
    try {
      const respond = await userController.createUser(req.body);
      res.status(200).json({ success: true, data: respond });
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  });
  

module.exports = router;