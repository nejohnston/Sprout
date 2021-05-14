import React from "react";
import PropTypes from "prop-types";
import NavBar from "./NavBar";

export const Layout = ({ children }) => {
  return (
    <div>
      <div className="appContent">{children}</div>
      {window.location.pathname != "/login" &&
      window.location.pathname != "/join-team" ? (
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
