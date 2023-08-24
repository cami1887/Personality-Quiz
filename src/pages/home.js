import background from './O.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <div className="homepage-content">
        <main className="homepage-text-container">  
            <div>
                <h1>Personality Quiz</h1>
                <h2 className="homepage-subtitle" >Find Out If You're A Bad Person Today!</h2>
            </div>
            <Link  to="/questions">
                <button className="start-quiz-button">Begin</button> 
            </Link>
        </main>
        <img className="homepage-image" src={background} alt="stick figure people with devil horns"/>
    </div>
    )
} 