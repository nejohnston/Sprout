import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="appContent">{children}</div>
      {window.location.pathname !== "/" &&
      window.location.pathname !== "/join-team" ? (
        <NavBar />
      ) : null}
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout