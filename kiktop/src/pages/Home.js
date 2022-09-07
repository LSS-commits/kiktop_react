import React, { useState, useEffect } from 'react';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import axios from 'axios';

const Home = () => {

  /* start with no users */
  const [users, setUsers] = useState(null);

  // to toggle following state of users
  const [userToToggle, setUserToToggle] = useState(null);

  // instantiate for later
  let descendingUsers;
  let topThreeFollowing;
  let topThreeNotFollowing;


  /* auto populate the data (create initial data) without visiting the page addInitialData */
  const addInitialData = async () => {
    await axios.post('/.netlify/functions/addInitialData');
  };

  /* fetch/get the data without visiting the page getData */
  const fetchData = async () => {
    const response = await axios.get('/.netlify/functions/getData');
    setUsers(response.data);
  }

  /* update user (is_followed) */
  if (userToToggle) {
    const newFollowedValue = userToToggle.is_followed ? false : true;

    const userData = {
      is_followed: newFollowedValue
    };

    // update then refetch data
     axios.put('/.netlify/functions/editData', {userId: userToToggle.id, data: userData})
     .then(() => fetchData());

     // set user to toggle to null again when update is done
     setUserToToggle(null);
  }

  /* to perform side effects (several actions) in the component */
  useEffect(() => {
    addInitialData();
    fetchData();
  }, []);

  /* filter the data (sort posts by id order) */
  if (users) {
    descendingUsers = users.sort((a,b) => a.id < b.id ? 1 : -1);
    /* NB users.reverse() would work only if ids are sorted in asc order beforehand */

    /* filter users for the followers column and sort them by popularity */
    const following = users.filter(user => user.is_followed);
    const descendingFollowing = following.sort((a,b) => a.likes < b.likes ? 1 : -1);
    // get top 3
    topThreeFollowing = descendingFollowing.slice(0,3);

    /* suggested accounts (accounts that are not followed) */
    const notFollowing = users.filter(user => !user.is_followed);
    const descendingNotFollowing = notFollowing.sort((a,b) => a.likes < b.likes ? 1 : -1);
    // get top 3
    topThreeNotFollowing = descendingNotFollowing.slice(0,3);

  }


  /* ==> map the data into the cards */
  return (
    <>
      {/* Must render only once we get our data */}
      { descendingUsers && (
        <div className="container">
          <FollowersColumn users={topThreeFollowing}/>
          {/* feed column */}
          <div className="feed">
            { descendingUsers.map((descendingUser) => (
              <Card 
                key={descendingUser.id}
                user={descendingUser}
                toggleFollow={userToToggle => setUserToToggle(userToToggle)}
              />
            ))}
          </div>
          {/* suggested column */}
          <div className="suggested-box">
            <div className="section">
              <div className="suggested">
                <h2 className="bold">Suggested accounts</h2>
                <div className="break" />
                {topThreeNotFollowing.map((notFollowingUser) => (
                  <MiniCard 
                    key={notFollowingUser.id}
                    user={notFollowingUser}
                    toggleFollow={userToToggle => setUserToToggle(userToToggle)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}  
    </>
  );
};

export default Home;
