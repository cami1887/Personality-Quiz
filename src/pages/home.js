
import { Link } from 'react-router-dom';

export default function Home() {
    return (
    <main>  
    <h1>Personality Quiz</h1>
    <h2 className="home-subtitle" >Find Out If You're A Bad Person Today!</h2>
    <Link to="/questions">
            <button className="start-quiz-button">Begin</button>
    </Link>
    </main>
    )
} 