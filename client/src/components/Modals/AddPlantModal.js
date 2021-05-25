// ========================================
//        Import Statements
// ========================================

// React
import React, { useContext, useState } from "react";

// Axios
import Axios from "axios";

// Bootstrap and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addButton from "./images/addbutton.svg";
import "./styles/AddPlantModal.css";

// Other imports
import { UserContext, SproutContext } from "../Layout/Layout";

// ========================================
//        Component Code
// ========================================

const AddPlantModal = ({ type, family }) => {
  const [show, setShow] = useState(false);
  const [imageSelected, setImageSelected] = useState("https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png"); // image selected states for file input
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useContext(UserContext);
  const [sprouts, setSprouts] = useContext(SproutContext);
  const submitForm = () => {
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
        console.log(res.data.secure_url);
      })
      .catch((err) => console.log(err));
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
        <Formik
          onSubmit={
            (values) => {
            fetch("http://localhost:3001/profile/", {
              method: "POST",
              body: JSON.stringify(values),
              headers: {
                "Content-Type": "application/json",
              },
            })
              .then((result) =>
                result.ok
                  ? setSprouts([...sprouts, values])
                  : result && console.log(sprouts)
              )
              .catch((error) => console.log("Error creating Sprout: ", error));
          }
        }
          initialValues={{
            userId: user.userId,
            name: "",
            family: "",
            type: "",
            wateringInterval: 0,
            notes: "",
            image: imageSelected,
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group controlId="sproutName">
                  <strong>
                    <p className="sprout-modal-text">Name*</p>
                  </strong>
                  <Form.Control
                    name="name"
                    value={values.name}
                    onChange={handleChange}
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
                    value={values.family}
                    onChange={handleChange}
                    name="family"
                    type="text"
                    placeholder="Sprout Name..."
                  />
                </Form.Group>
                <Form.Group controlId="sproutType">
                  <strong>
                    <p className="sprout-modal-text">Type</p>
                  </strong>
                  <Form.Control
                    onChange={handleChange}
                    value={values.type}
                    name="type"
                    type="text"
                    placeholder="Sprout Type..."
                  />
                </Form.Group>
                <Form.Group controlId="sproutWateringInterval">
                  <strong>
                    <p className="sprout-modal-text">Watering Interval*</p>
                  </strong>
                  <Form.Control
                    onChange={handleChange}
                    value={values.wateringInterval}
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
                  <Form.Control
                    value={values.notes}
                    onChange={handleChange}
                    name="notes"
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group>
                  <strong>
                    <p className="sprout-modal-text">Upload Sprout Picture</p>
                  </strong>
                  <Form.File
                    type="file"
                    id="sproutUploadPicture"
                    onChange={(event) => setImageSelected(event.target.files[0])
                    }
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <div onClick={handleClose}>
                  <Button
                    variant="primary"
                    onClick={submitForm}
                    type="submit"
                    className="custom-primary-button"
                  >
                    Add a New Sprout
                  </Button>
                </div>
              </Modal.Footer>
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddPlantModal;
