import React from "react";
import "./Notif.css";
import Modal from "react-bootstrap/Modal";

export default function Notif({ show, onClose, text }) {
   return (
      <Modal size="sm" show={show} onHide={onClose} aria-labelledby="example-modal-sizes-title-sm">
         <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">Notification</Modal.Title>
         </Modal.Header>
         <Modal.Body>{text}</Modal.Body>
      </Modal>
   );
}
