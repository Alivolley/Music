import React from "react";
import "./ModalComp.css";
import Modal from "react-bootstrap/Modal";

export default function ModalComp({ show, text, closeModal }) {
   return (
      <Modal show={show} size="lg" centered>
         <Modal.Header>
            <Modal.Title className="modal-title" id="contained-modal-title-vcenter">
               Gettng information
            </Modal.Title>
         </Modal.Header>
         <Modal.Body className="modal-text">{text}</Modal.Body>
         <Modal.Footer>
            <button className="modal-close" onClick={closeModal}>
               Close
            </button>
         </Modal.Footer>
      </Modal>
   );
}
