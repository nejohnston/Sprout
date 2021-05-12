import React from 'react';
import susan from '../../containers/AboutUs/images/susan.jpg'

const TeamList = ({members}) => {

    return members.map(member => {

      console.log(member.img)
      return(
      <>
        <div className="member-container">
          <img className="avatar" src={member.img} alt={member.name}/>

          <div className="member-description">
          <h3>{member.name}</h3>

          {member.position}
          
          <p><span>My Sprout: {member.plant}</span>
          <br/>
          <br/>
          {member.about}</p>
          </div>
        </div>
      </>
      )

    })

} 

export default TeamList;