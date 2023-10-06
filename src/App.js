import './styling/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questions } from './pages/questions.js';
import Home from './pages/home.js';
import Error from './pages/error.js';
import Results from './pages/results.js';
import Loserboard from './pages/worst-people.js';
import TwelveSteps from './pages/twelve-steps';
import Forum from './pages/community.js';
import Sidebar from './pages/sidebar.js';

export default function App() {
  return (
    <> 
      <BrowserRouter>
      <Sidebar/>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/questions" element={ <Questions /> }/>
          <Route path="/result" element={ <Results /> }/>
          <Route path="/loserboard" element={ <Loserboard />}/>
          <Route path="/twelve-steps" element={ <TwelveSteps /> }/>
          <Route path="/forum" element={ <Forum /> }/>
          <Route path="*" element={ <Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
