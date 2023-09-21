import '../styling/twelve-steps.css';
import { Link } from 'react-router-dom';

export default function TwelveSteps() {
    return (
        <>
        <main className="article">
        <div className="article-header">
            <h2 className="article-title">Be Born Again</h2>
            <img className="article-picture" src="/images/eggs.gif" alt="chick hatched from an egg" />
        </div>
        <hr/>
        <p className="article-subtitle">
            <span>Not</span> sucking is possible &#40;though not likely&#41; with these 12 medium difficulty steps!
        </p>
        <div className="egg-carton-container">                    
                <img className="egg-carton" src="/images/carton.png" alt="egg carton"/>
                    <img id="image-one" className="blank" src="/images/blank.png" alt="hover for first step" />
                    <div id="step-one" className="step"> Answer phone calls at other people places of work </div>
                    <img id="image-two" className="blank" src="/images/blank.png" alt="hover for second step" />
                    <div id="step-two" className="step" > Show Up At Random People's Birthday Parties and Gift Them Handmade Food Items </div>
                    <img id="image-three" className="blank" src="/images/blank.png" alt="hover for third step" />
                    <div id="step-three" className="step"> Leave the lowest rated car dealerships 5 start ratings </div>
                    <img id="image-four" className="blank" src="/images/blank.png" alt="hover for fourth step" />
                    <div id="step-four" className="step"> Clean the machines others are using at the gym in between their sets </div>
                    <img id="image-five" className="blank" src="/images/blank.png" alt="hover for fifth step" />
                    <div id="step-five" className="step"> Fold other peoples laundry at the laundromat </div>
                    <img id="image-six" className="blank" src="/images/blank.png" alt="hover for sixth step" />
                    <div id="step-six" className="step"> Gift your landlord extra rent</div>
                    <img id="image-seven" className="blank" src="/images/blank.png" alt="hover for seventh step" />
                    <div id="step-seven" className="step"> Leave food along hiking trails </div>
                    <img id="image-eight" className="blank" src="/images/blank.png" alt="hover for eighth step" />
                    <div id="step-eight" className="step"> Break in all the shoes at the shoe store</div>
                    <img id="image-nine" className="blank" src="/images/blank.png" alt="hover for ninth step" />
                    <div id="step-nine" className="step">Join AA groups to lend give advice</div>
                    <img id="image-ten" className="blank" src="/images/blank.png" alt="hover for tenth step" />
                    <div id="step-ten" className="step"> Open a free clinic in your community regardless of experience</div>
                    <img id="image-eleven" className="blank" src="/images/blank.png" alt="hover for eleventh step" />
                    <div id="step-eleven" className="step">Remove speed limit signs in highly congested areas</div>
                    <img id="image-twelve" className="blank" src="/images/blank.png" alt="hover for twelfth step" />
                    <div id="step-twelve" className="step"> Take academic courses for students </div>
            </div>
            <hr className="last-break" />
            <div className='community-link-container'>
                <p className="community-description">Want To Talk To Other Morally Questionable People For Some Reason?</p>
                <div className="button-container">
                    <Link to="/forum">
                        <button className="community-button">Click Here</button>
                    </Link>
                    <div className="egg-white-three"></div>
                </div>
    </div>
    </main>
    
    
    </>
    );
  }