// ====================================
//            	IMPORT
// ====================================

// React
import { React, useState } from "react";

// Axios
import Axios from "axios";

// Assets
import EditButton from "../../config/assets/icons/pen.svg";

//Bootstrap
import Button from 'react-bootstrap/Button';

// Styling
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "./styles/PlantProfileSmallButtons.css";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the modal component of editing plants with form fields filled in with the plant's current information.
 * @param {Bootstrap} props - required parameter for Bootstrap modal to be vertically centered.
 * @param {Object} plant - the object representation of the current page's plant.
 * @returns - the edit modal of the current plant displayed on the page.
 */
const EditPlant = ({props, plant}) => {

  // States for showing and hiding the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [imageSelected, setImageSelected] = useState("")  // image selected states for file input

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
      <img src={EditButton} id="edit-button" onClick={handleShow} alt=""/>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Sprout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group controlId="sproutName">
            <strong>
              <p className="sprout-modal-text">Name</p>
            </strong>
            <Form.Control type="text" defaultValue={plant["user_given_name"]} />
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control type="text" defaultValue={plant["family"]} />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control type="text" defaultValue={plant["type"]} />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Watering Interval (days)</p>
            </strong>
            <Form.Control
              type="number"
              defaultValue={plant["watering_interval"]}
            />
          </Form.Group>
          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control as="textarea" rows={3} defaultValue={plant["notes"]} />
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
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditPlant;