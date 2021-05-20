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
import addButton from "../../config/assets/icons/addbutton.svg";
import "./styles/AddPlantModal.css";


// ========================================
//        Component Code
// ========================================

/**
 * Return a component of adding plant modal.
 * 
 * If a type and family value is passed to the component, it will fill in 'type' and 'family' input fields.
 * @param {String} type - a plant type.
 * @param {String} family - a plant family. 
 * @returns - the add plant modal component. 
 */
const AddPlantModal = ({ type, family }) => {

  // States
  const [show, setShow] = useState(false);                // modal states
  const [imageSelected, setImageSelected] = useState("")  // image selected states for file input

  // Functions
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const submitForm = () => {

    // Instantiate new imageData for Cloudinary - code snippet adapted from PedroTech
    let imageData = new FormData()
    imageData.append("file", imageSelected);         // File is current image selected
    imageData.append("upload_preset", "sproutPlant") // Cloudinary upload preset

    // Reach Sprout Cloudinary API and upload image - code snippet adapted from PedroTech
    Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload",
      imageData
    ).then (res => {


      console.log(res.data.secure_url);
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
