import FollowersColumn from '../components/FollowersColumn';
import Card from '../components/Card';
import MiniCard from '../components/MiniCard';

const Home = () => {
  // TODO: populate data
  return (
    <div className='container'>
      <FollowersColumn />
      <div className='feed'>
        <Card/>
      </div>
      <div className='suggested-box'>
        <div className='section'>
          <div className='suggested'>
            <h2 className='bold'>Suggested accounts</h2>
            <div className='break'/>
            <MiniCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
