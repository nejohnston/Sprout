// ====================================
//            	IMPORT
// ====================================

// React
import { React, useState, useContext } from "react";

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

// Sprout and User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";


// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the modal component of editing plants with form fields filled in with the plant's current information.
 * @param {Bootstrap} props - required parameter for Bootstrap modal to be vertically centered.
 * @param {Object} plant - the object representation of the current page's plant.
 * @returns - the edit modal of the current plant displayed on the page.
 */
const EditPlant = ({props, sprout, updateSproutPage}) => {

  // Get Auth User by UserContext and current sprouts by SproutContext
  let authUser = useContext(UserContext)[0];
  let [sprouts, setSprouts] = useContext(SproutContext);

  // States for modal from react-bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Form states
  const [inputSproutName, setSproutName] = useState(sprout["name"]);
  const [inputFamily, setFamily] = useState(sprout["family"]);
  const [inputType, setType] = useState(sprout["type"]);
  const [inputWateringInterval, setWateringInterval] = useState(sprout["wateringInterval"])
  const [inputNotes, setNotes] = useState(sprout["notes"])
  const [selectedSproutPic, setSelectedSproutPic] = useState(sprout["image_url"]);

  // Edit Sprout function upon form submission
  const editSprout = async () => {
    
    // Upload image to Cloudinary database, code adapted from PedroTech
    const imageData = new FormData();
    imageData.append("file", selectedSproutPic);
    imageData.append("upload_preset", "sproutPlant");
    let uploadRes = await Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload/",
      imageData
    )

    // Put request to plant profile to update the plant
    Axios.put("/plant-profile", {
      sproutId: sprout.sproutId,
      name: inputSproutName,
      family: inputFamily,
      type: inputType,
      wateringInterval: inputWateringInterval,
      notes: inputNotes,
      imageUrl: uploadRes.data.secure_url,

      userId: authUser.userId
    })
      .then(res => {

        // Create the updated sprout Object
        let updatedSprout = {...sprout,
          name: res.data.user_sprouts_given_name,
          family: res.data.user_sprouts_family,
          type: res.data.user_sprouts_type,
          wateringInterval: res.data.user_sprouts_watering_intervals,
          notes: res.data.user_sprouts_notes,
          image_url: res.data.user_sprouts_image
        }

        // Find the current sprout in SproutContext and update the sprout Object
        let sproutIndex = sprouts.findIndex( ({sproutId}) => sproutId === sprout.sproutId)
        let updatedSprouts = [...sprouts];
        updatedSprouts[sproutIndex] = updatedSprout;

        // Change the states of the Sprout Profile Page and Sprout Context
        updateSproutPage(updatedSprout);
        setSprouts(updatedSprouts);

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
        <div onClick={handleClose}>
          <Button
            variant="primary"
            onClick={editSprout}
            className="custom-primary-button"
          >
            Save Changes
          </Button>
        </div>
        </Modal.Footer>

      </Modal>
    </>
  );
};

export default EditPlant;