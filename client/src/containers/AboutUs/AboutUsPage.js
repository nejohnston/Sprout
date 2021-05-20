// ====================================
//            IMPORT
// ====================================

// React
import React from 'react';

// Components
import TeamList from '../../components/AboutUs/AboutUsList.js';

// Data
import teamMembers from '../../config/data/teamList.json';

// Styling
import './AboutUs.css';


// ====================================
//          REACT COMPONENT
// ====================================

/**
 * Return About Us page components.
 * @returns - components for About Us page.
 */

const AboutUs = () => {
  return (
  <>
    <div className="about-us-hero-container">
      <div>
        <h1 id="about-us-main-title">Behind Sprout.</h1>
      </div>
    </div>

    <section id="about-us-section">

    <div className="about-us-content">
    <h2 className="about-us-h2">Our Story</h2>
    <p>Banded together by an interest to support sustainable living and gardening,
       our team came up with <em>Sprout</em>, a gardening application to promote
       bee-friendly and native gardens across the Greater Vancouver area.
        <br/><br/>
       With this application, we hope that users can connect with the community while
       learning more about the ecosystem around them. We welcome users of all ages
       and expertise to join us in nurturing their knowledge about plant-care and plant-life!
    </p>
    </div>

    <div className="content">
        <h2 className="about-us-h2">Team Sprout</h2>
        <div className="all-members-container">
        <TeamList members={teamMembers} />
        </div>
    </div>

    <div className="about-us-content">
    <h2 className="about-us-h2">Resources and Gratitude</h2>
    <p>Our team would like to sincerely thank Kwantlen Polytechnic University's School of Horticulture for 
      allowing us to reference from their very complete and fantastic <a className="link" href="https://plantdatabase.kpu.ca/">Plant Database</a> for this project.
      <br/><br/>
      We would also like to thank Patrick Guichon, our supervisor, for addressing our gitflow workflow anxieties, and supporting this project to completion.
      He provided us endless helpful support and feedback that was perfect for a team of sapling programmers! Thanks for helping us 'grow'!


    </p>
    </div>
    </section>

    <div id="about-us-nav-block"></div>


  </>
  );
};

export default AboutUs;