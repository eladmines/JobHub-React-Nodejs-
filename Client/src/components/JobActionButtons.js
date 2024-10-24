import { React, useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useFetchPost } from '../hooks/useFetchPost';
import { NotLoggedInModal } from './NotLoggedInModal';
import { useSelector } from 'react-redux';
export function JobActionButtons({ id, saved, applicated_date, handleRemove, endpoint }) {
  const { data: data, loading, error, fetchData } = useFetchPost();
  const [isSaved, setIsSaved] = useState(saved === 1);
  const [isApplied, setIsApplied] = useState(applicated_date === null);
  const [showModal, setShowModal] = useState(false);
  const isLogged = useSelector(state => state);
  const handleCloseModel = () => {
    setShowModal(false);
  };

  const handleSaveJob = async (id) => {
    const storedSkills = localStorage.getItem("skills");
    if (!isLogged) {
      setShowModal(true);
      return;
    }
    const payload = { jobId: id };
    if (!isSaved) {
      await fetchData("jobs/savejob", payload);
      setIsSaved(true);
    } else {
      await fetchData("jobs/removesavedjob", payload);
      if (window.location.href.includes(endpoint)) {
        handleRemove(payload);
      } else {
        setIsSaved(!isSaved);
      }
    }
  };

  const handleSaveApp = async (id) => {
    const payload = { jobId: id };
    const storedSkills = localStorage.getItem("skills");
    
    if (isLogged) {
      setShowModal(true);
      return;
    }

    if (isApplied) {
      await fetchData("/applications/saveApp", payload);
      setIsApplied(!isApplied);
    } else {
      await fetchData("/applications/deleteSaveApp", payload);
      if (window.location.href.includes(endpoint)) {
        handleRemove(payload);
      } else {
        setIsApplied(!isApplied);
      }
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

      <NotLoggedInModal show={showModal} handleClose={handleCloseModel} />
    </div>
  );
}
