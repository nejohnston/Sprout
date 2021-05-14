/* React imports */
import { React, useState } from "react";

/* Component or image imports */
import EditButton from "./images/pen.svg";

/* Bootstrap imports */
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./styles/PlantProfileSmallButtons.css";

const EditPlant = ({props, plant}) => {
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
        <Form.Group controlId="sproutName">
            <strong>
              <p className="sprout-modal-text">Name</p>
            </strong>
            <Form.Control type="text" value={plant.user_given_name} />
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control type="text" value={plant.family} />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control type="text" value={plant.type} />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Watering Interval (days)</p>
            </strong>
            <Form.Control
              type="number"
              value={plant.watering_interval}
            />
          </Form.Group>
          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control as="textarea" rows={3} value={plant.notes} />
          </Form.Group>
          <Form.Group>
            <strong>
              <p className="sprout-modal-text">Upload Sprout Picture</p>
            </strong>
            <Form.File id="sproutUploadPicture" />
          </Form.Group>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditPlant;