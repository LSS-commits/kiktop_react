import React, { useState, useEffect } from 'react';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import axios from 'axios';

const Home = () => {

  /* 1) start with no users */
  const [users, setUsers] = useState(null);
  let descendingUsers;
  let topThreeFollowing;
  let topThreeNotFollowing;

  /* 2) populate the data (create data) without visiting the page addData */
  const addData = async () => {
    await axios.post('/.netlify/functions/addData');
  }

  /* 3) fetch/get the data without visiting the page posts */
  const fetchData = async () => {
    const results = await axios.get('/.netlify/functions/posts');

    /* set the users to use them as users later */
    setUsers(results.data);
  }

  /* to perform side effects in the component = here, add the data and fetch the data */
  useEffect(() => {
    addData();
    fetchData();
  }, []);

  /* 4) filter the data (sort posts by id order) */
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
