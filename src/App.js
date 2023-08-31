import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import Questions from './pages/questions.js';
import Home from './pages/home.js';
import Error from './pages/error.js';
import Results from './pages/results.js';
import Loserboard from './pages/worst-people.js';
import TwelveSteps from './pages/twelve-steps';
import Login from './pages/community-login.js';
import Forum from './pages/community-forum.js';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function App() {
  const [clicked, showMenu] = useState(false);
  function ToggleMenu() {
    showMenu(!clicked);
  }

     
  return (
    <> 
      <BrowserRouter>
        <MenuIcon className='menu-icon' onClick={ToggleMenu} style={{visibility: clicked ? 'hidden' : 'visible'}}/>
        <nav className="sidebar" style={{visibility: clicked ? 'visible' : 'hidden'}}>
          <CloseIcon className="close-icon" onClick={ToggleMenu}/>
          <div className="navlink-container" >  
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/loserboard">Top 10 Worst People (With Addresses)</NavLink>
            <NavLink className="navlink" to="/twelve-steps">12 Step Program</NavLink>
            <NavLink className="navlink" to="/forum">Community</NavLink>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/questions" element={ <Questions /> }/>
          <Route path="/results" element={ <Results /> }/>
          <Route path="/loserboard" element={ <Loserboard />}/>
          <Route path="/twelve-steps" element={ <TwelveSteps /> }/>
          <Route path="/login" element={ <Login /> }/>
          <Route path="/forum" element={ <Forum /> }/>
          <Route path="*" element={ <Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
