
import { loserboard } from '../data/loserboard-data';
import '../styling/loserboard.css';
import Eggy from './eggman.js';
import { useState } from 'react';

export default function Loserboard() {
  let [click, setClick] = useState(0);

  function handleClick() {
    if (click < loserboard.length-1) {
      setClick(click => click + 1)
    }
    else {
      setClick(0)
    }
  }

    return (
      <>
        <Eggy position="bottom-left" message="Click each fried egg's name to get their live location. To see the next stinky on the list, click anywhere near the egg!"/>
        <div className="loserboard"  key= {Math.random()*10000}> 
          <h1 className='loserboard-title'>TOP TEN MOST STINKY </h1>
          <div className="cooking-container" onClick={handleClick}>
            <img className="frying-pan"  src="/images/frying-pan.png" alt="frying pan"/>
            <div className="loserboard-egg"> 
              <a href={loserboard[click].addressUrl} target="_blank" rel="noreferrer" className='loser-name'>{loserboard[click]?.name}</a>            
              <img className="real-egg" src="/images/realegg.png" alt="fried egg" />
              <img className="location-icon"  src="/images/facial-expression.png" alt="click for location"/>
            </div> 
          </div>
        </div>
      </> 
    );
  }