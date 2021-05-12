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
       img_src: "./images/mike.png",
       plant: "Rosemary",
       about: "Mike has recently started to love cooking as a new Vancouverite! (mainly because it is so expensive to eat out here!)"},
      {name: "Susan Li",
       img_src: "./images/susan.jpg",
       plant: "Spider Lilies",
       about: "Susan only has one houseplant (which she constantly forgets to water)..."},
      {name: "Nicholas Johnston",
       img_src: "./images/mike.png",
       plant: "Fern",
       about: "Fun Fact! The fronds of a native BC Sword Fern can grow up to 1.5 meters long and up to 25 centimetres wide."},
      {name: "Sally Poon",
       img_src: "./images/sally.jpg",
       plant: "Sunflower",
       about: "Sally enjoys knitting, picnics, and baking! She finds the latter extremely therapeutic."}
    ]


    return members.map

}

export default AboutUs;