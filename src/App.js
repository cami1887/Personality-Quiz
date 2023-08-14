import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';
import QuestionOne from './pages/question-one.js';
import QuestionTwo from './pages/question-two.js';
import QuestionThree from './pages/question-three.js';
import QuestionFour from './pages/question-four.js';
import QuestionFive from './pages/question-five.js';
import QuestionSix from './pages/question-six.js';
import QuestionSeven from './pages/question-seven.js';
import QuestionEight from './pages/question-eight.js';
import QuestionNine from './pages/question-nine.js';
import QuestionTen from './pages/question-ten.js';
import Home from './pages/home.js';
import Error from './pages/error.js';
import Results from './pages/results.js';
import Loserboard from './pages/worst-people.js';
import TwelveSteps from './pages/twelve-steps';
import Community from './pages/community.js'
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
          <NavLink className="navlink" to="/community">Community</NavLink>
        </div>
      </nav>
      
      
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/question1" element={ <QuestionOne /> }/>
        <Route path="/question2" element={ <QuestionTwo /> }/>
        <Route path="/question3" element={ <QuestionThree /> }/>
        <Route path="/question4" element={ <QuestionFour /> }/>
        <Route path="/question5" element={ <QuestionFive /> }/>
        <Route path="/question6" element={ <QuestionSix /> }/>
        <Route path="/question7" element={ <QuestionSeven /> }/>
        <Route path="/question8" element={ <QuestionEight /> }/>
        <Route path="/question9" element={ <QuestionNine /> }/>
        <Route path="/question10" element={ <QuestionTen /> }/>
        <Route path="/results" element={ <Results /> }/>
        <Route path="/loserboard" element={ <Loserboard /> }/>
        <Route path="/twelve-steps" element={ <TwelveSteps /> }/>
        <Route path="/community" element={ <Community /> }/>
        <Route path="*" element={ <Error />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
