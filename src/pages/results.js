import { Link } from 'react-router-dom';
import Eggy from './eggy.js';
import { resultContent } from '../data/results-data.js';
import '../styling/results.css';

export default function Results() {
  
  const result = parseInt(sessionStorage.getItem('finalResult'));

  return (
    <>
      <Eggy position="top-right" message={resultContent[result].eggyResponse}/>
      <div className="result-container">
        <h2 className="result-title" >{resultContent[result].title}</h2>
        <p className='result-subtitle'>{resultContent[result].subtitle}</p>
        <p className='result-description'>{resultContent[result].description}</p>
        <p className='result-description lyrics'>{resultContent[result]?.secondDescription}</p>
      </div>
      <Link to="/dozen-steps">
        <button className="twelve-steps-button">How To Not Suck</button>
      </Link>
      <div className="egg-white-two"></div>
    </>
  );
}

