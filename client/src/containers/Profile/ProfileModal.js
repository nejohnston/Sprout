import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addButton from "./images/addbutton.svg";
import "./styles/ProfileModal.css";

const ProfileModal = () => {
  const [show, setShow] = useState(false);
  const initialState = {
    name: '',
    family: '',
    type: '',
    wateringInterval: 0,
    notes: '',
    image: '',
  }
  const [sprout, setSprout] = useState(initialState);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <img src={addButton} id="profile-add-button" alt="" onClick={handleShow} />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group  controlId="sproutName">
            <strong>
              <p className="sprout-modal-text">Name*</p>
            </strong>
            <Form.Control value='' onChange={() => setSprout} type="text" placeholder="Sprout Name..." />
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control value='' type="text" placeholder="Sprout Name..." />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control value='' type="text" placeholder="Sprout Type..." />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Watering Interval*</p>
            </strong>
            <Form.Control
            value=""
              type="number"
              placeholder="Number of days between watering..."
            />
          </Form.Group>
          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control value="" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <strong>
              <p className="sprout-modal-text">Upload Sprout Picture</p>
            </strong>
            <Form.File id="sproutUploadPicture" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={handleClose}
            className="custom-primary-button"
          >
            Add a New Sprout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ProfileModal;
