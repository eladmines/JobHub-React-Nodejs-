const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController')
router.get('/getPLStats' , async (req,res) =>{
    try{
        const getPLstats = await statsController.getPLstatsController();
        res.status(200).json(getPLstats);
    }catch(error){
        console.error("Error occured",error);
        res.status(500).json({message : "Internal Serer Error"})
    }
})

module.exports = router;