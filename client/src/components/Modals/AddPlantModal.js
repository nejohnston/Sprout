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
  const [imageSelected, setImageSelected] = useState(
    "https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png"
  ); // image selected states for file input
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let img_url =
    "https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png";
  const setSprouts = useContext(SproutContext)[1];
  let authUser = useContext(UserContext)[0];
  let history = useHistory();

  const submitForm = async () => {
    if (
      document.getElementById("sproutName").value !== "" &&
      document.getElementById("sproutWateringInterval").value !== "" &&
      document.getElementById("sproutWateringInterval").value > 0 &&
      document.getElementById("sproutWateringInterval").value % 1 === 0
    ) {
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
        })
        .catch((err) => console.log(err));

      setTimeout(() => {
        Axios.post("/api/profile/", {
          family: document.getElementById("sproutFamily").value,
          name: document.getElementById("sproutName").value,
          notes: document.getElementById("sproutNotes").value,
          type: document.getElementById("sproutType").value,
          wateringInterval: document.getElementById("sproutWateringInterval")
            .value,
          imageUrl: img_url,
          userId: authUser.userId,
        })
          .then((res) => {
            let data = res.data;
            let updatedSprouts = [];
            for (let i = 0; i < data.length; i++) {
              let sproutObject = {
                dateAdded: data[i].user_sprouts_date_added,
                family: data[i].user_sprouts_family,
                name: data[i].user_sprouts_given_name,
                notes: data[i].user_sprouts_notes,
                sproutId: data[i].user_sprouts_id,
                type: data[i].user_sprouts_type,
                wateringInterval: data[i].user_sprouts_watering_intervals,
                imageUrl: data[i].user_sprouts_image,
                userId: data[i].application_user_id,
              };
              updatedSprouts.push(sproutObject);
            }
            if (res.status === 200) {
              setSprouts(updatedSprouts);
              authUser.points += 100;
              handleClose();
              history.push("/profile");
            }
          })
          .catch((err) => console.log(err));
      }, 1500);
    } else {
      alert(
        "You must fill out all the required fields, and watering interval must be an integer greater than 0."
      );
    }
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
              defaultValue={family}
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
              defaultValue={type}
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
              min={1}
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
