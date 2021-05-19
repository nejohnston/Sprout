// ====================================
//            	IMPORT
// ====================================

// React
import { React, useState } from 'react';

// Styles
import './styles/ProfilePictureModal.css';
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";


/**
 * Return the profile image component, with editing profile modal triggered on click.
 * @param {Bootstrap} props - bootstrap props required to vertically center modal.
 * @param {String} profilePic - the url to user's profile picture.
 * @returns - the profile image component, with editing profile modal triggered on click.
 */
function ProfilePictureModal({props, profilePic}) {

  // States to trigger modal on and off - code from Bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  return (
    <>
      <img id="user-profile-picture" className="shadow-sm" src={profilePic} alt="user-pic" onClick={handleShow}/>

      <Modal show={show} onHide={handleClose} {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>

              <Form.Group>
                  <Form.Label className="sprout-modal-text">Profile Picture</Form.Label>
                  <Form.File id="FormControlFile1" label="Upload New Profile Picture" />
              </Form.Group>

              
              <Form.Group controlId="sprout-modal-text">
                  <Form.Label className="sprout-modal-text">Display Name</Form.Label>
                  <Form.Control type="email" defaultValue="Toph Beifong" />
              </Form.Group>

            </Form>
        </Modal.Body>


        <Modal.Footer>
          <Button variant="primary" className="custom-primary-button" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
  
export default ProfilePictureModal;