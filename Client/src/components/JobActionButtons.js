import { React, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useFetchPost } from '../hooks/useFetchPost';
import { NotLoggedInModal } from './NotLoggedInModal';
export function JobActionButtons({ id, saved, applicated_date }) {
  const { data, loading, error, fetchData } = useFetchPost();
  const [isSaved, setIsSaved] = useState(saved === 1);
  const [isApplied, setIsApplied] = useState(applicated_date === null);
  const [showModal, setShowModal] = useState(false); // State for the modal


  const handleCloseModel = () =>{
    setShowModal(false)
  }
  function handleCloseModal(){
    setShowModal(false)
  }
  const handleSaveJob = async (id) => {
    const storedSkills = localStorage.getItem("skills");
    if (!storedSkills || storedSkills.length === 0) {
      // If skills are empty, show the modal
      setShowModal(true);
      return; // Prevent further execution
    }
    const payload = { jobId: id };
    if (!isSaved) {
      await fetchData("http://localhost:5000/jobs/savejob", payload);
      setIsSaved(true);
    } else {
      await fetchData("http://localhost:5000/jobs/removesavedjob", payload);
      setIsSaved(false); 
    }
  };

  const handleSaveApp = async (id) => {
    const payload = { jobId: id };
    
    // Check if localStorage has skills
    const storedSkills = localStorage.getItem("skills");
    
    if (!storedSkills || storedSkills.length === 0) {
      // If skills are empty, show the modal
      setShowModal(true);
      return; // Prevent further execution
    }
    
    if (isApplied) {
      await fetchData("http://localhost:5000/applications/saveApp", payload);
      setIsApplied(!isApplied);
    } else {
      alert("deleteSaveApp");
      await fetchData("http://localhost:5000/applications/deleteSaveApp", payload);
      setIsApplied(!isApplied);
    }
  };

  return (
    <div>
      <Button 
        data={id}
        className="w-100 btn btn-light mb-2"
        onClick={(e) => {
          e.preventDefault();
          handleSaveJob(id);
        }}
      >
        <i className="bi bi-save me-2"></i> {isSaved ? 'Removed' : 'Save Job'}
      </Button>
      <Button 
        data={id}
        className="w-100 btn btn-light mb-2"
        onClick={(e) => {
          e.preventDefault();
          handleSaveApp(id); 
        }}
      > 
        <i className="bi bi-save me-2"></i> {isApplied ? 'Apply' : 'Remove Application'}
      </Button>
      <Button id={id} className="w-100 btn btn-light mb-2">
        <i className="bi bi-eye me-2"></i> Tracking
      </Button>
      <Button id={id} className="w-100 btn btn-light mb-2">
        <i className="bi bi-exclamation-circle me-2"></i> Report
      </Button>

      {/* Modal for not logged in */}
     <NotLoggedInModal show={showModal} handleClose={handleCloseModel}/>
    </div>
  );
}
