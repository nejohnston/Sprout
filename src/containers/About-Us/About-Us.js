import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './About-Us.css';

/* Bootstrap components */


const useStyles = makeStyles();

const AboutUs = () => {
  const classes = useStyles();
  return (
  <>
    <h1>'Growing' the knowledge for plant life</h1>

    <div>
    <h2>Our Story</h2>
    <p>Banded together by an interest to support sustainable living and gardening,
       our team came up with <em>Sprout</em>, our gardening application to promote
       bee-friendly and native gardens across the Greater Vancouver area.
        <br/><br/>
       With this application, we hope that users can connect with the community while
       learning more about the ecosystem around them. We welcome users of all ages
       and expertise to join us in 'growing' our knowledge about plant-care and plant-life!
    </p>
    </div>

    <div>
        <h2>Team Sprout</h2>
        <TeamList/>
    </div>
  </>
  );
};

const TeamList = () => {



    return <p>blah!</p>

}

export default AboutUs;