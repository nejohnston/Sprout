// ====================================
//            	 IMPORT
// ====================================

// React
import React, { useState, useContext, useEffect, useRef } from "react";

// Components
import SproutGallery from "../../components/Profile/SproutGallery";
import ProfilePictureModal from "../../components/Profile/ProfilePictureModal";
import Scorebar from "../../components/Profile/Scorebar";
import AddPlantModal from "../../components/Modals/AddPlantModal";

// Sprout and User Context from Layout.js Provider
import { SproutContext, UserContext } from "../../components/Layout/Layout";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Profile Page components.
 * @returns - components of Profile Page.
 */
const ProfilePage = ({ userContext }) => {
  const [user, setUser] = useContext(UserContext);
  const [sprouts, setSprouts] = useContext(SproutContext);
  const [display, setDisplay] = useState(true);

  console.log(user);
  useEffect(() => {
    setTimeout(() => setDisplay(false), 500); //after 0.5 seconds the state will be switched to false, which will allow the async to complete
  }, []);

  let newSprouts = [
    {
      userId: 1,
      name: "Pikachu",
      type: "aloe",
      family: "succulent",
      wateringInterval: 2,
      notes: null,
      image_url:
        "https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png",
    },
  ];

  const [saveSprout, setSaveSprout] = useState(false);

  const useMountedRef = () => {
    const mountedRef = useRef(false);

    useEffect(() => {
      setTimeout(() => {
        mountedRef.current = true;
      });
    }, []);

    return mountedRef;
  };

  const mountedRef = useMountedRef();
  const addsprout = () => setSaveSprout(true);
  const resetsproutstate = () => {
    if (saveSprout === true) {
      console.log(saveSprout);
      setSaveSprout(false);
      console.log(saveSprout);
    }
  };

  useEffect(() => {
    if (mountedRef.current) {
      setSprouts([...sprouts, ...newSprouts]);
    }
  }, [saveSprout]);

  console.log(sprouts);
  console.log(saveSprout);

  return (
    <>
      {display === false ? (
        <div id="container">
          <div id="profile-header">
            <h1 id="profile-h1">My Sprouts</h1>
            <AddPlantModal
              addSprout={addsprout}
              resetSproutState={resetsproutstate}
            />
          </div>

          <hr />

          <div id="my-sprouts-user-container">
            <ProfilePictureModal
              profilePic={user.profilePicture}
              prefName={user.name}
            />
            <h5 id="my-sprouts-user-name">{user.name}</h5>
          </div>

          <Scorebar user={user} sprouts={sprouts} />

          <SproutGallery sprouts={sprouts} />
          <div id="vector-bg"></div>
        </div>
      ) : null}
    </>
  );
};

export default ProfilePage;
