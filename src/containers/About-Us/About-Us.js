import React from 'react';
import './About-Us.css';
import mike_pic from './images/mike.png';
import susan_pic from './images/susan.jpg';
import sally_pic from './images/sally.jpg'

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
        <div class="all-members-container">
        <TeamList/>
        </div>
    </div>
    </section>
  </>
  );
};

const TeamList = () => {

    const members = [
      {name: "Mike Hwang",
       img: mike_pic,
       position: "Back-End Developer & Database Design",
       plant: "Rosemary",
       about: "Mike has recently started to love cooking as a new Vancouverite! (mainly because it is so expensive to eat out here!)"},
      {name: "Susan Li",
       img: susan_pic,
       position: "Front End Developer & UI/UX Professional",
       plant: "Spider Lilies",
       about: "Susan only has one houseplant (which she constantly forgets to water)..."},
      {name: "Nicholas Johnston",
       position: "Back End Developer & React Consultant",
       img: mike_pic,
       plant: "Fern",
       about: "Fun Fact! The fronds of a native BC Sword Fern can grow up to 1.5 meters long and up to 25 centimetres wide."},
      {name: "Sally Poon",
       position: "Project Manager & Front End Developer",
       img: sally_pic,
       plant: "Sunflower",
       about: "Sally enjoys knitting, picnics, and baking! She finds the latter extremely therapeutic."}
    ]


    return members.map(member => {

      return(
      <>
        <div className="member-container">
          <img className="avatar" src={member.img} alt={member.name}/>
          <h3>{member.name}</h3>
          {member.position}
          
          <p><span>My Sprout: {member.plant}</span>
          <br/>
          <br/>
          {member.about}</p>
        </div>
      </>
      )

    })

}

export default AboutUs;