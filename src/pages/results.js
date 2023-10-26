import { Link } from 'react-router-dom';
import Eggy from './eggman.js';
import { resultContent } from '../data/results-data.js';
import '../styling/results.css';
import { result }from './questions.js';

export default function Results() {

  return (
    <>
      <Eggy position="top-right" message={resultContent[result].eggyResponse}/>
      <div className="result-container">
        <h2 className="result-title" >{resultContent[result].title}</h2>
        <p className='result-subtitle'>
          {resultContent[result].subtitle}
        </p>
        <p className='result-description'>
          {resultContent[result].description}
        </p>
          
      </div>
      <Link to="/twelve-steps">
            <button className="twelve-steps-button">How To Not Suck</button>
          </Link>
          <div className="egg-white-two"></div>
    </>
    
  );
}

// sessionStorage.setItem("result", result);

