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
const EditPlant = ({props, sprout, updateSproutPage, updateSproutContext}) => {

  // States for showing and hiding the modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form States
  const [inputSproutName, setSproutName] = useState(sprout["name"]);
  const [inputFamily, setFamily] = useState(sprout["family"]);
  const [inputType, setType] = useState(sprout["type"]);
  const [inputWateringInterval, setWateringInterval] = useState(sprout["wateringInterval"])
  const [inputNotes, setNotes] = useState(sprout["notes"])
  const [selectedSproutPic, setSelectedSproutPic] = useState(sprout["image_url"]);

  const editSprout = async () => {

    const imageData = new FormData();
    imageData.append("file", selectedSproutPic);
    imageData.append("upload_preset", "sproutPlant");
    let uploadRes = await Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload/",
      imageData
    )

    Axios.put("http://localhost:3001/plant-profile", {
      sproutId: sprout.sproutId,
      name: inputSproutName,
      family: inputFamily,
      type: inputType,
      wateringInterval: inputWateringInterval,
      notes: inputNotes,
      imageUrl: uploadRes.data.secure_url
    })
      .then((res) => {
        console.log(res)
      })
    
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
            <Form.Control type="text" 
            defaultValue={inputSproutName} onChange={e => setSproutName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control type="text" 
            defaultValue={inputFamily} onChange={e => setFamily(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control type="text" 
            defaultValue={inputType} onChange={e => setType(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sproutWateringInterval">
            <strong>
              <p className="sprout-modal-text">Watering Interval (days)</p>
            </strong>
            <Form.Control
              type="number"
              defaultValue={inputWateringInterval} onChange={e => setWateringInterval(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control as="textarea" rows={3} 
            defaultValue={inputNotes} onChange={e => setNotes(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="sproutPicture">
            <strong>
              <p className="sprout-modal-text">Upload Sprout Picture</p>
            </strong>
            <Form.File id="sproutUploadPicture" 
            onChange={e => setSelectedSproutPic(e.target.files[0])}/>
          </Form.Group>

        </Modal.Body>


        <Modal.Footer>
          <Button
            variant="primary"
            onClick={editSprout}
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