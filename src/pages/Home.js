import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';
import { useEffect, useState } from 'react';
import axiosClient from '../shared/axiosClient';

const Home = () => {
  // start with no users
  const [users, setUsers] = useState(null);

  /* auto populate the data (create initial data) without visiting the page addInitialData */
  const addInitialData = async () => {
    await axiosClient.post('/addInitialData');
  }
 
  /* fetch/get the data without visiting the page getData */
  const fetchData = async () => {
    const results = await axiosClient.get('/getData');
    console.log(results.data);

    setUsers(results.data)
  }

  // to add and fetch data only once if no change has been made to the component 
  useEffect(() => {
    addInitialData();
    fetchData();
  }, []);

  return (
    <div className='container'>
      <FollowersColumn />
      <div className='feed'>
        {/* <Card/> */}
      </div>
      <div className='suggested-box'>
        <div className='section'>
          <div className='suggested'>
            <h2 className='bold'>Suggested accounts</h2>
            <div className='break'/>
            {/* <MiniCard/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
