import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles();

const Alert = () => {
  const classes = useStyles();
  return (
  <div>
    <p>
      This is where components will reside
    </p>
  </div>);
};

export default Alert;
