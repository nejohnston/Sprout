import React, {createContext, useState} from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

// const userInitialValue = {
//   userId: 0,
//   teamId: 0,
//   username: '',
//   password: '',
//   name: '',
//   profilePicture:'',
//   team: 0,
//   points: 0,
//   sprouts: []
// }
const initialState = {
  user: {
  userId: 0,
  teamId: 0,
  username: '',
  password: '',
  name: '',
  profilePicture:'',
  team: 0,
  points: 0,
  sprouts: []
},
sprouts: []
}
// UserContext
export const UserContext = createContext();

// SproutContext
export const SproutContext = createContext();
const Layout = ({ children }) => {

  const [user, setUser] = useState(initialState.user)
  const [sprouts, setSprouts] = useState(initialState.sprouts)
  return (

    <UserContext.Provider value={[user, setUser]}>
    <SproutContext.Provider value={[sprouts, setSprouts]}>
      {
      window.location.pathname === "/asdfasdfasdfasdfsadfsafdasdf" ? 
      <div className="easterEgg">
        {children}
      </div>
      :
      <div className="appContent">{children}</div>}
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/join-team" &&
      window.location.pathname !== "/about-us" &&
      window.location.pathname !== "/asdfasdfasdfasdfsadfsafdasdf" ? (
        <NavBar />
      ) : null
      }
      </SproutContext.Provider>
    </UserContext.Provider>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout