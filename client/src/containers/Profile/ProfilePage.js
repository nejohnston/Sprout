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

  console.log(sprouts)

  useEffect(() => {
    setTimeout(() => setDisplay(false), 500); //after 0.5 seconds the state will be switched to false, which will allow the async to complete
  }, []);

  let newSprouts = [
    {
      dateAdded: "2021-05-21T07:00:00.000Z",
      family: "asdf",
      image_url: "https://res.cloudinary.com/sprout03/image/upload/v1621536166/default_sprout_qlbudo.png",
      isWatered: "0",
      lastWatered: null,
      name: "Pikachu",
      nextAlert: "2021-06-02T07:00:00.000Z",
      notes: "sdfasfa",
      sproutId: 15,
      type: "sdaf",
      wateringInterval: 12,
    },
  ];

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
      setSprouts([...sprouts, ...newSprouts]);
    }
  }, [saveSprout]);

  const addsprout = () => {
    if (newSprouts) {
      setSaveSprout(true);
    }
  };
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
              prefName={user.name}
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
