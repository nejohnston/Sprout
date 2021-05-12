import React from 'react';
import './About-Us.css';

/* Bootstrap components */

const AboutUs = () => {
  return (
  <>
    <div class="hero-container">
      <div>
        <h1>Nurturing plant-life knowledge.</h1>
      </div>
    </div>

    <section>

    <div class="content">
    <h2>Our Story</h2>
    <p>Banded together by an interest to support sustainable living and gardening,
       our team came up with <em>Sprout</em>, a gardening application to promote
       bee-friendly and native gardens across the Greater Vancouver area.
        <br/><br/>
       With this application, we hope that users can connect with the community while
       learning more about the ecosystem around them. We welcome users of all ages
       and expertise to join us in nurturing their knowledge about plant-care and plant-life!
    </p>
    </div>

    <div class="content">
        <h2>Team Sprout</h2>
        <TeamList/>
    </div>
    </section>
  </>
  );
};

const TeamList = () => {

    const members = [
      {name: "Mike Hwang",
       plant: "Rosemary"},
      {name: "Susan Li",
       plant: "Spider Lilies"},
      {name: "Nicholas Johnston",
       plant: "Fern"},
      {name: "Sally Poon",
       plant: ""}
    ]


    return <p>blah!</p>

}

export default AboutUs;