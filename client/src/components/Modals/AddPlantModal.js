// ========================================
//        Import Statements
// ========================================

// React
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

// Axios
import Axios from "axios";

// Bootstrap and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addButton from "../../config/assets/icons/addbutton.svg";
import "./styles/AddPlantModal.css";

// Other imports
import { UserContext, SproutContext } from "../Layout/Layout";

// ========================================
//        Component Code
// ========================================

const AddPlantModal = ({ type, family }, props) => {
  const [show, setShow] = useState(false);
  const [imageSelected, setImageSelected] = useState("https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png"); // image selected states for file input
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let img_url =
    "https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png";

  const [user, setUser] = useContext(UserContext);
  const [sprouts, setSprouts] = useContext(SproutContext);
  let authUser = useContext(UserContext)[0];
  let history = useHistory();

  const submitForm = async () => {
    // Instantiate new imageData for Cloudinary - code snippet adapted from PedroTech
    let imageData = new FormData();
    imageData.append("file", imageSelected); // File is current image selected
    imageData.append("upload_preset", "sproutPlant"); // Cloudinary upload preset

    // Reach Sprout Cloudinary API and upload image - code snippet adapted from PedroTech
    Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload",
      imageData
    )
      .then((res) => {
        img_url = res.data.secure_url;
        console.log("Image added to cloudinary");
      })
      .catch((err) => console.log(err));

    setTimeout(() => {
      Axios.post("http://localhost:3001/profile/", {
        dateAdded: Date(),
        family: document.getElementById("sproutFamily").value,
        name: document.getElementById("sproutName").value,
        notes: document.getElementById("sproutNotes").value,
        sproutId: Math.floor(Math.random() * 100000000),
        type: document.getElementById("sproutType").value,
        wateringInterval: document.getElementById("sproutWateringInterval")
          .value,
        imageUrl: img_url,
        userId: authUser.userId,
      })
        .then((res) => {
          console.log(res);
          let data = JSON.parse(res.config.data);
          let sproutObject = {
            dateAdded: data.dateAdded,
            family: data.family,
            name: data.name,
            notes: data.notes,
            sproutId: data.sproutId,
            type: data.type,
            wateringInterval: data.wateringInterval,
            imageUrl: data.imageUrl,
            userId: data.userId,
          };
          console.log(sproutObject);
          setSprouts([...sprouts, sproutObject]);
          if (res.status == 200) {
            history.push("/profile");
          }
        })
        .catch((err) => console.log(err));
    }, 1500);
  };

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
            <Form.Control
              name="name"
              type="text"
              placeholder="Sprout Name..."
              required
            />
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control
              name="family"
              type="text"
              placeholder="Sprout Name..."
              defaultValue = {family}
            />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control
              name="type"
              type="text"
              placeholder="Sprout Type..."
              defaultValue = {type}
            />
          </Form.Group>
          <Form.Group controlId="sproutWateringInterval">
            <strong>
              <p className="sprout-modal-text">Watering Interval*</p>
            </strong>
            <Form.Control
              name="wateringInterval"
              type="number"
              placeholder="Number of days between watering..."
              required
            />
          </Form.Group>
          <Form.Group controlId="sproutNotes">
            <strong>
              <p className="sprout-modal-text">Additional Notes</p>
            </strong>
            <Form.Control name="notes" as="textarea" rows={3} />
          </Form.Group>
          <Form.Group>
            <strong>
              <p className="sprout-modal-text">Upload Sprout Picture</p>
            </strong>
            <Form.File
              type="file"
              id="sproutUploadPicture"
              onChange={(event) => setImageSelected(event.target.files[0])}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={submitForm}
            type="submit"
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
