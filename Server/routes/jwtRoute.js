require('dotenv').config();
const express = require('express');
const router = express.Router();

router.post('/jwtValidation', async (req, res) => {
   const jwtValidationCookie = req.cookies['token'];
   if(!jwtValidationCookie){
      console.log("empty")
   }else{
      console.log(jwtValidationCookie);
   }
});


module.exports = router;
