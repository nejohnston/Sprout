/* React imports */
import { React, useState } from "react";

/* Component or image imports */
import EditButton from "./images/pen.svg";

/* Bootstrap imports */
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./styles/PlantProfileSmallButtons.css";

const EditPlant = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={EditButton} id="edit-button" onClick={handleShow} alt=""/>


      <Modal show={show} onHide={handleClose} {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditPlant;