import React, { useState, useEffect } from 'react';
import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import axios from 'axios';

const Home = () => {

  /* 1) start with no users */
  const [users, setUsers] = useState(null);
  let descendingUsers;

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
  }


  /* ==> map the data into the cards */
  return (
    <>
      {/* Must render only once we get our data */}
      { descendingUsers && (
        <div className="container">
          <FollowersColumn />
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
              </div>
            </div>
          </div>
        </div>
      )}  
    </>
  );
};

export default Home;
