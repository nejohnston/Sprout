import React from 'react';
import TeamList from '../../components/List/AboutUsList.js';
import teamMembers from '../../config/data/teamList.json';
import './AboutUs.css';

const AboutUs = () => {
  return (
  <>
    <div class="about-us-hero-container">
      <div>
        <h1 id="about-us-main-title">Behind Sprout.</h1>
      </div>
    </div>

    <section id="about-us-section">

    <div class="about-us-content">
    <h2 class="about-us-h2">Our Story</h2>
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
        <h2 class="about-us-h2">Team Sprout</h2>
        <div class="all-members-container">
        <TeamList members={teamMembers} />
        </div>
    </div>
    </section>
  </>
  );
};

export default AboutUs;