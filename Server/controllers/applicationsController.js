const applicationsServices = require('../services/applicationsServices');
async function getApplicationsCounter(req){
  try {

    const result = await applicationsServices.getApplicationsCounter(req); 
    return result; 
} catch (error) {
    console.error("Error retrieving saved jobs count:", error);
    throw error; 
}

    
}

async function getApplications(req,res){
    try {
        const result = await applicationsServices.getApplications(req.user);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}


async function getApplicationsByMonth(req,res){
    try {
    
        const result = await applicationsServices.getApplicationsByMonth(req.user);
    
        res.status(200).json(result);
      } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

async function saveApp(req,res){

    try {
      const result = await applicationController.saveApp(req.user, req.body);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error saving application:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
}

async function deleteSaveApp(req,res){
    try {
        const result = await applicationsServices.deleteSaveApp(req.user, req.body);
        res.status(200).json(result);
      } catch (error) {
        console.error('Error deleting saved application:', error);
        res.status(500).json({ message: 'Internal server error' });
      }
}

module.exports = { getApplicationsCounter ,getApplications,saveApp,deleteSaveApp,getApplicationsByMonth};