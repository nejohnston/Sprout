// ========================================
//        Import Statements
// ========================================

// React
import { React, useState } from "react";

// Bootstrap and styling
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import addButton from "./images/addbutton.svg";
import "./styles/AddPlantModal.css";


// ========================================
//        Component Code
// ========================================


const AddPlantModal = ({ user, userSprouts, setSprouts, type, family }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
              // console.log(values.wateringInterval) && 
              fetch('http://localhost:3001/profile/',
              {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json"
                },
              })
              .then(response => response.json())
              .then(result => console.log('Successful Sprout Add: ', result))
              .catch(error => console.log('Error creating Sprout: ', error))
              && console.log(userSprouts)
              && setSprouts([...userSprouts, values])
        } 
        }
          initialValues={
            { 
              userId: user.userId,
              name: '',
              family: '',
              type: '',
              wateringInterval: 0,
              notes: '',
              image: ''
          }
        }
          >
            {
            ({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors
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
            />
          </Form.Group>
          <Form.Group controlId="sproutFamily">
            <strong>
              <p className="sprout-modal-text">Family</p>
            </strong>
            <Form.Control 
            value={values.family}
            onChange={handleChange} name="family" type="text" placeholder="Sprout Name..." />
          </Form.Group>
          <Form.Group controlId="sproutType">
            <strong>
              <p className="sprout-modal-text">Type</p>
            </strong>
            <Form.Control
            onChange={handleChange}
            value={values.type} name="type" type="text" placeholder="Sprout Type..." />
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
            onChange={handleChange} name="notes" as="textarea" rows={3} />
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
            type="submit"
            className="custom-primary-button"
          >
            Add a New Sprout
          </Button>
        </Modal.Footer>
        </Form>
        )}
        </Formik>
      </Modal>
    </>
  );
};

export default AddPlantModal;