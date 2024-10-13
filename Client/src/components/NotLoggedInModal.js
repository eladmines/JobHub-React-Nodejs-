import React from 'react';
import { Modal, Button } from 'react-bootstrap';

export const NotLoggedInModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Not Logged In</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ textAlign: 'center' }}>
        <i className="bi bi-sad" style={{ fontSize: '50px' }}></i>
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Oops! It looks like you are not logged in. Please log in to access this feature.
        </p>
        <a href="/login" style={{ color: '#007bff', textDecoration: 'underline', fontWeight: 'bold' }}>
          Click here to log in
        </a>
        <p style={{ marginTop: '10px', fontSize: '16px' }}>
          If you don't have an account,{' '}
          <a href="/register" style={{ color: '#007bff', textDecoration: 'underline', fontWeight: 'bold' }}>
            register here
          </a>.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
