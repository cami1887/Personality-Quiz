import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className="homepage-content">
            <main className="homepage-text-container">  
                    <h1>Do you absolutely SUCK?</h1>
                <Link  to="/questions">
                    <button className="start-quiz-button">Find Out</button> 
                </Link>
            </main>
            
            <img className="homepage-image" src="/images/cracked.jpg" alt="stick figure people with devil horns"/>
            <div className="egg-white"></div>
        </div>
    )
} 