// ====================================
//            IMPORTS
// ====================================

// React
import React from 'react';

/**
 * Maps each object (team member) in the members array to a styled component.
 * @param {Array} members: an array containing objects representing each member of the Sprout team.
 * @returns an array of styled team member objects.
 */

const TeamList = ({members}) => {

    return members.map(member => {

      return(
      <>
        <div className="member-container" key={member.id}>
          <img className="about-us-avatar" src={member.img} alt={member.name}/>

          <div className="member-description">
          <h3>{member.name}</h3>

          {member.position}
          
          <p><span className="about-us-my-sprout">My Sprout: {member.plant}</span>
          <br/>
          <br/>
          {member.about}</p>
          </div>
        </div>
      </>
      )

    });

}; 

export default TeamList;