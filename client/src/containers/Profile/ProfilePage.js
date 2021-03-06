// ====================================
//            	 IMPORT
// ====================================

// React
import React, { useState, useContext, useEffect } from "react";
import Axios from "axios";

// Components
import SproutGallery from "../../components/Profile/SproutGallery";
import ProfilePictureModal from "../../components/Profile/ProfilePictureModal";
import Scorebar from "../../components/Profile/Scorebar";
import AddPlantModal from "../../components/Modals/AddPlantModal";
import Welcome from "../../components/Profile/Welcome";

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
  const user = useContext(UserContext)[0];
  const [points, setPoints] = useState(user.points);
  const [sprouts, setSprouts] = useContext(SproutContext);
  const [display, setDisplay] = useState(true);
  const [userPrefNameDisplay, setPrefNameDisplay] = useState(user.name);

  useEffect(() => {
    setPoints(user.points);
  }, [sprouts]);

  // useEffect(() => {
  //   let isMounted = true;
  //   getSprouts();
  //   return () => {
  //     isMounted = false;
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => setDisplay(false), 500);
  }, []);

  // const getSprouts = async () => {
  //   await Axios.get("/api/profile").then((res) => {
  //     user.userId = res.data.userId;
  //     user.username = res.data.username;
  //     setPrefNameDisplay(res.data.name);
  //     user.points = res.data.points;
  //     user.team = res.data.team;
  //     user.profilePicture = res.data.profilePicture;
  //     user.sprouts = res.data.sprouts;
  //     setSprouts(res.data.sprouts);
  //   });
  // };

  //after 0.5 seconds the state will be switched to false, which will allow the fetch of profile picture to complete

  // const [saveSprout, setSaveSprout] = useState(false);

  // This is to prevent the useEffect hook from firing on each mount of the AddPlant modal

  // const useMountedRef = () => {
  //   const mountedRef = useRef(false);
  //   useEffect(() => {
  //     setTimeout(() => {
  //       mountedRef.current = true;
  //     });
  //   }, []);

  //   return mountedRef;
  // };

  // const mountedRef = useMountedRef();

  // useEffect(() => {
  //   if (mountedRef.current) {
  //     console.log("hello")
  //   }
  // }, [saveSprout]);

  // const addsprout = () => setSaveSprout(true);
  // const resetsproutstate = () => {
  //   if (saveSprout === true) {
  //     setSaveSprout(false);
  //   }
  // };

  return (
    <>
      {display === false ? (
        <div id="container">
          <div id="profile-header">
            <h1 id="profile-h1">My Sprouts</h1>
            <AddPlantModal />
          </div>

          <hr />

          <div id="my-sprouts-user-container">
            <ProfilePictureModal
              prefName={user.name}
              setPrefNameDisplay={setPrefNameDisplay}
            />
            <h5 id="my-sprouts-user-name">{userPrefNameDisplay}</h5>
          </div>
          <Scorebar points={points} sprouts={sprouts} />

          { sprouts.length === 0 && <Welcome/>}

          <SproutGallery sprouts={sprouts} />
          <div id="vector-bg"></div>
        </div>
      ) : null}
    </>
  );
};

export default ProfilePage;
