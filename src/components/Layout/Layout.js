import React from 'react';
import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};