import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import { useEffect, useState } from 'react';
import axiosClient from '../shared/axiosClient';

const Home = () => {
  // start with no users
  const [users, setUsers] = useState(null);
// instantiate for later use, filter users
let descendingUsers;
let topThreeFollowing;
let topThreeNotFollowing;

  /* auto populate the data (create initial data) without visiting the page addInitialData */
  const addInitialData = async () => {
    await axiosClient.post('/addInitialData');
  }
 
  /* fetch/get the data without visiting the page getData */
  const fetchData = async () => {
    const results = await axiosClient.get('/getData');
    setUsers(results.data)
  }

  // to add and fetch data only once if no change has been made to the component 
  useEffect(() => {
    addInitialData();
    fetchData();
  }, []);

    /* filter the data (sort by id order) */
    if (users) {
      // sort by desc order
      descendingUsers = users.sort((a,b) => a.id < b.id ? 1 : -1);
      /* NB users.reverse() would work only if ids were sorted in asc order beforehand */

      /* followers column = filter users (only followed users) and sort them by popularity */
      const following = users.filter(user => user.is_followed);
      const descendingFollowing = following.sort((a,b) => a.likes < b.likes ? 1 : -1);
      // get top 3
      topThreeFollowing = descendingFollowing.slice(0,3);

      /* suggested accounts = filter accounts that are not followed and sort them by popularity */
      const notFollowing = users.filter(user => !user.is_followed);
      const descendingNotFollowing = notFollowing.sort((a,b) => a.likes < b.likes ? 1 : -1);
      // get top 3
      topThreeNotFollowing = descendingNotFollowing.slice(0,3);
    }

  return (
    <>
      {/* Must render only once we get our data */}
      { descendingUsers && (
        <div className='container'>
          <FollowersColumn users={topThreeFollowing}/>
          {/* feed column */}
          <div className='feed'>
            { descendingUsers.map((descendingUser) => (
            <Card
            key={descendingUser.id}
            user={descendingUser}
            />
            ))}
          </div>
          {/* suggested column */}
          <div className='suggested-box'>
            <div className='section'>
              <div className='suggested'>
                <h2 className='bold'>Suggested accounts</h2>
                <div className='break'/>
                { topThreeNotFollowing.map((notFollowingUser) => (
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
}

export default Home;
