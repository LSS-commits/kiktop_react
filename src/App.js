import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Home from "./pages/Home";
import Upload from "./pages/Upload";

import './App.css';

const App = () => {

  /* redirect to home page if no route is matched (but api route getData is still accessible) */
  const Nomatch = () => {
    return <Navigate to="/" />
  }

  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/upload" element={<Upload/>}/>
        <Route exact path="/" element={<Home/>} />
        <Route path="*" element={
          <Nomatch>
            <Home />
          </Nomatch>
        }/>
      </Routes>
    </Router>
  );
}

export default App;
