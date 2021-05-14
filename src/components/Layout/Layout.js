import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

export const Layout = ({ children }) => {
  const displayNav = () => {
    if (
      window.location.pathname != "/login" ||
      window.location.pathname != "/join-team"
    ) {
      <NavBar />;
    }
  };
  return (
    <div>
      <div className="appContent">{children}</div>
      {displayNav}
    </div>
  );
};

Layout.defaultProps = {
  children: null,
};

Layout.propTypes = {
  children: PropTypes.node,
};
