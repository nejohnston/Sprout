// ========================================
//        Import Statements
// ========================================

// React
import { React, useState } from "react";

// Axios
import Axios from "axios";

// Bootstrap and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addButton from "./images/addbutton.svg";
import "./styles/AddPlantModal.css";


// ========================================
//        Component Code
// ========================================


const AddPlantModal = ({ type, family }) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  

  const [imageSelected, setImageSelected] = useState("")

  const submitForm = () => {
    let formData = new FormData()
    formData.append("file", imageSelected);
    formData.append("upload_preset", "sproutPlant")

    Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload",
      formData
    ).then (res => {
      console.log(res.secure_url);
    }).catch (err => console.log(err))
  }

  return (
    <>
      <img
        src={addButton}
        id="profile-add-button"
        alt=""
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="sproutName">
            <strong>
              <p className="sprout-modal-text">Name*</p>
            </strong>
            <Form.Control type="text" placeholder="Sprout Name..." required/>
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control type="text" placeholder="Sprout Name..." defaultValue={family}/>
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control type="text" placeholder="Sprout Type..." defaultValue={type}/>
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Watering Interval*</p>
            </strong>
            <Form.Control
              type="number"
              placeholder="Number of days between watering..."
              required
            />
          </Form.Group>
          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <strong>
              <p className="sprout-modal-text">Upload Sprout Picture</p>
            </strong>
            <input type="file" id="sproutUploadPicture" onChange={event => setImageSelected(event.target.files[0])}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={submitForm}
            className="custom-primary-button"
          >
            Add a New Sprout
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddPlantModal;
