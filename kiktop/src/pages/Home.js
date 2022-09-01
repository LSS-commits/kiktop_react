import FollowersColumn from '../components/FollowersColumn';

const Home = () => {
  return (
    <>
      <div className="container">
        <FollowersColumn />
        {/* feed column */}
        <div className="feed">
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
    </>
  );
};

export default Home;
