import React from 'react';

const TeamList = ({members}) => {

    return members.map(member => {

      return(
      <>
        <div className="member-container" key={member.id}>
          <img className="about-us-avatar" src={member.img} alt={member.name}/>

          <div className="member-description">
          <h3>{member.name}</h3>

          {member.position}
          
          <p><span class="about-us-my-sprout">My Sprout: {member.plant}</span>
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