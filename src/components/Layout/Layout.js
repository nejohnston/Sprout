import React from 'react';
import PropTypes from 'prop-types';
import NavBar from './NavBar';

export const Layout = ({ children }) => {
  return (
    <div>
      <div className='appContent'></div>
      {children}
      <NavBar />
    </div>
  )
}

Layout.defaultProps = {
  children: null
};

Layout.propTypes = {
  children: PropTypes.node
};