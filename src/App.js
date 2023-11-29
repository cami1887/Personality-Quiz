import './styling/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Questions } from './pages/questions.js';
import Home from './pages/home.js';
import Error from './pages/error.js';
import Results from './pages/results.js';
import Loserboard from './pages/loserboard.js';
import DozenSteps from './pages/dozen-steps';
import CommunityChat from './pages/community.js';
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
          <Route path="/dozen-steps" element={ <DozenSteps /> }/>
          <Route path="/community-chat" element={ <CommunityChat /> }/>
          <Route path="*" element={ <Error />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
