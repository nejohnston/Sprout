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
import { NewSproutContext, SproutContext, UserContext } from "../../components/Layout/Layout";


// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./Profile.css";
import NavItem from "react-bootstrap/esm/NavItem";

// ====================================
//           REACT COMPONENT
// ====================================

/**
 * Return the Profile Page components.
 * @returns - components of Profile Page.
 */
const ProfilePage = ({ userContext }) => {
  const user = useContext(UserContext)[0];
  const [sprouts, setSprouts] = useContext(SproutContext);
  const [display, setDisplay] = useState(true);
  const [userPrefNameDisplay, setPrefNameDisplay] = useState(user.name);

  useEffect(() => {
    setTimeout(() => setDisplay(false), 500); //after 0.5 seconds the state will be switched to false, which will allow the async to complete
  }, []);

  const [newSprouts, setNewSprouts] = useContext(NewSproutContext);

  const [saveSprout, setSaveSprout] = useState(false);

  // This is to prevent the useEffect hook from firing on each mount of the AddPlant modal

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

  useEffect(() => {
    if (mountedRef.current) {
      console.log("hello")
    }
  }, [saveSprout]);

  const addsprout = () => setSaveSprout(true);
  const resetsproutstate = () => {
    if (saveSprout === true) {
      setSaveSprout(false);
    }
  };

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
              prefName={user.name }
              setPrefNameDisplay={setPrefNameDisplay}
            />
            <h5 id="my-sprouts-user-name">{userPrefNameDisplay}</h5>
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
