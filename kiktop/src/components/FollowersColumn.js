import React from 'react';
import MicroCard from '../components/MicroCard';

// users = topThreeFollowing.users 

const FollowersColumn = ({users}) => {
  return (
    <div className="followers-column">
      <div className="followers-section">
        <div className="home-button" />
        <h2 className="bold red">For You</h2>
      </div>
      <div className="followers-section">
        <div className="following"/>
        <h2>Following</h2>
      </div>
      <hr />
      <p>Your top accounts</p>
      {users && users.map((user) => (
        <MicroCard 
          key={user.id}
          user={user}
        />
      ))}
      <hr />
    </div>
  )
};
  
export default FollowersColumn;