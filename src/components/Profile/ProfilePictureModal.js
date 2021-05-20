// ====================================
//            	IMPORT
// ====================================

// React
import React, { useState } from "react";
import Axios from "axios";

// Styles
import "./styles/ProfilePictureModal.css";
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
function ProfilePictureModal({ props, profilePic, prefName }) {
  // States to trigger modal on and off - code from Bootstrap
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // State to store the image being uploaded
  const [imageSelected, setImageSelected] = useState("");

  // Store the image to Cloudinary, and save the URL to database - code adapted from PedroTech (YouTube)

  const uploadImage = () => {
    // Create a new formData object for the file to be uploaded
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "sproutUser"); // Cloudinary image upload presets
    Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload/",
      imageData
    )
      .then((response) => console.log(response["data"]["secure_url"]))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <img
        id="user-profile-picture"
        className="shadow-sm"
        src={profilePic}
        alt="user-pic"
        onClick={handleShow}
      />

      <Modal show={show} onHide={handleClose} {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile Settings</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label className="sprout-modal-text">
                Profile Picture
              </Form.Label>
              <Form.File
                id="FormControlFile1"
                label="Upload New Profile Picture"
                onChange={(event) => {
                  setImageSelected(event.target.files[0]);
                }}
              />
            </Form.Group>

            <Form.Group controlId="sprout-modal-text">
              <Form.Label className="sprout-modal-text">
                Display Name
              </Form.Label>
              <Form.Control type="text" defaultValue={prefName} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <div onClick={handleClose}>
            <Button
              variant="primary"
              className="custom-primary-button"
              onClick={uploadImage}
            >
              Save Changes
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ProfilePictureModal;
