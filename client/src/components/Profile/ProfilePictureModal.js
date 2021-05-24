// ====================================
//            	IMPORT
// ====================================

// React
import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

// Styles
import "./styles/ProfilePictureModal.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

// User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";

/**
 * Return the profile image component, with editing profile modal triggered on click.
 * @param {Bootstrap} props - bootstrap props required to vertically center modal.
 * @param {String} profilePic - the url to user's profile picture.
 * @returns - the profile image component, with editing profile modal triggered on click.
 */
function ProfilePictureModal({ props, prefName }) {

  // Get Auth user Id
  let authUser = useContext(UserContext)[0];

  // States to trigger modal on and off - code from Bootstrap
  const [show, setShow] = useState(false);
  const [profilePic, setProfilePic] = useState(authUser.profilePicture);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // useEffect to sense when profile update has been added
  // useEffect(() => {
  //   if (updateState) {
  //     console.log('hello')
  //     setUpdateState(false);
  //   }
  // }, [updateState])


  // State to store the image being uploaded
  const [imageSelected, setImageSelected] = useState("");

  // Store the image to Cloudinary, and save the URL to database - code adapted from PedroTech (YouTube)

  const uploadImage = async () => {
    // Create a new formData object for the file to be uploaded
    const imageData = new FormData();
    imageData.append("file", imageSelected);
    imageData.append("upload_preset", "sproutUser"); // Cloudinary image upload presets
    let res1 = await Axios.post(
      "https://api.cloudinary.com/v1_1/sprout03/image/upload/",
      imageData
    )

    let param = {
      userName: authUser.username,
      profilePic: res1.data.secure_url,
      userId: authUser.userId
    };
    
    Axios.put("http://localhost:3001/profile", param)
      .then((res) => {
        let newProfilePic = res.data.application_user_image
        authUser.profilePicture = newProfilePic
        setProfilePic(newProfilePic)
      });

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
