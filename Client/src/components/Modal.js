import './Modal.css';

export function Modal({ errorMessage, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>
          &times;
        </span>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
}

