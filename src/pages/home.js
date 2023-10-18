import '../styling/home.css';
import { Link } from 'react-router-dom';
import Eggy from './eggman';

export default function Home() {
    return (
        <div className="homepage-content">
            <Eggy message="Hi! My name is Eggy and I was just born. Were you?" positionX='50%' positionY='50%'/>
            <main className="homepage-text-container">  
                    <h1>DO YOU ABSOLUTELY SUCK?</h1>
                <Link to="/questions">
                    <button className="start-quiz-button">Find Out</button> 
                </Link>
            </main>
            <img className="homepage-image" src="./images/cracked.jpg" alt="stick figure people with devil horns"/>
            <div className="egg-white"></div>
        </div>
    )
} 