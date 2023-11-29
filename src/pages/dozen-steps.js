import '../styling/dozen-steps.css';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Eggy from './eggy.js';

export default function TwelveSteps() {
  const subtitleRef = useRef(null);
  const linkRef = useRef(null);
  const breakRef = useRef(null);
  const cartonRef = useRef(null);
  const [subtitleShow, setSubtitleShow] = useState(false);
  const [linkShow, setLinkShow] = useState(false);
  const [cartonShow, setCartonShow] = useState(false);
  const [breakShow, setBreakShow] = useState(false);

  //once user scrolls to a certain innerheight based on a calculated value, a state is set that will queue an animation by adding a class
  function reveal() {
    let windowHeight = window.innerHeight;
    let elementTop;
    let elementVisible= 150;
  
    if (subtitleRef.current) {
      elementTop = subtitleRef.current.getBoundingClientRect().top;
      if (elementTop < windowHeight-elementVisible) {
        setSubtitleShow(true);
      }
    }
    if (cartonRef.current) {
      elementTop = cartonRef.current.getBoundingClientRect().top;
      if (elementTop < windowHeight-elementVisible) {
        setCartonShow(true);
        setBreakShow(true);
      }
    }
    if (linkRef.current) {
      elementTop = linkRef.current.getBoundingClientRect().top;
      if (elementTop < windowHeight-elementVisible) {
        setLinkShow(true);
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <main className="article">
      <div className="article-header">
          <h2 className="article-title">BE BORN EGGAIN</h2>
          <img className="article-picture" src="/images/born-eggain.gif" alt="egg man exiting hatched egg" />
      </div>
      <hr/>
      <>
        {subtitleShow ? <Eggy position="bottom-left" message="Start your recovery by hovering over the eggs!"/> : <></>}
      </>
      <p ref={subtitleRef} className={ `article-subtitle reveal${ subtitleShow ? ' active' : '' }` }>
        <span>NOT</span> sucking is possible &#40;though not likely&#41; with these 12 over-easy steps!
      </p>
      <div ref={cartonRef} className={ `egg-carton-container reveal${ cartonShow ? ' active' : '' }` }>                    
              <img className="egg-carton" src="/images/carton.png" alt="egg carton"/>
                  <img id="image-one" className="blank" src="/images/blank.png" alt="hover for first step" />
                  <div id="step-one" className="step"> Answer phone calls at other people's places of work </div>
                  <img id="image-two" className="blank" src="/images/blank.png" alt="hover for second step" />
                  <div id="step-two" className="step" > Show up at random people's birthday parties and gift them handmade food items </div>
                  <img id="image-three" className="blank" src="/images/blank.png" alt="hover for third step" />
                  <div id="step-three" className="step"> Leave the lowest rated car dealerships 5 start ratings </div>
                  <img id="image-four" className="blank" src="/images/blank.png" alt="hover for fourth step" />
                  <div id="step-four" className="step"> Wipe down people's machines at the gym between each rep </div>
                  <img id="image-five" className="blank" src="/images/blank.png" alt="hover for fifth step" />
                  <div id="step-five" className="step"> Fold other people's laundry at the laundromat </div>
                  <img id="image-six" className="blank" src="/images/blank.png" alt="hover for sixth step" />
                  <div id="step-six" className="step"> Gift your landlord extra rent</div>
                  <img id="image-seven" className="blank" src="/images/blank.png" alt="hover for seventh step" />
                  <div id="step-seven" className="step"> Leave food along hiking trails </div>
                  <img id="image-eight" className="blank" src="/images/blank.png" alt="hover for eighth step" />
                  <div id="step-eight" className="step"> Break in all the shoes at the shoe store</div>
                  <img id="image-nine" className="blank" src="/images/blank.png" alt="hover for ninth step" />
                  <div id="step-nine" className="step">Offer a ride to children walking home from school</div>
                  <img id="image-ten" className="blank" src="/images/blank.png" alt="hover for tenth step" />
                  <div id="step-ten" className="step"> Open a free clinic in your community regardless of experience</div>
                  <img id="image-eleven" className="blank" src="/images/blank.png" alt="hover for eleventh step" />
                  <div id="step-eleven" className="step">Remove speed limit signs in highly congested areas</div>
                  <img id="image-twelve" className="blank" src="/images/blank.png" alt="hover for twelfth step" />
                  <div id="step-twelve" className="step">Give your neighbor a suprise HGTV-style makeover</div>
          </div>
          <hr className={`last-break reveal${ breakShow ? ' active' : '' }`} ref={breakRef}/>
          <div ref={linkRef} className={ `community-link-container last-reveal${ linkShow ? ' active' : '' }` }>
              <p className="community-description">Want To Talk To Other Deviled Eggs For Some Reason?</p>
              <div className="button-container">
                  <Link to="/community-chat">
                      <button className="community-button">Click Here</button>
                  </Link>
                  <div className="egg-white-three"></div>
              </div>
          </div>
      </main>
    </>
  );
}