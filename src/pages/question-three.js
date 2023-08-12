import { Link } from 'react-router-dom';


export default function QuestionThree() {
    return (
      <>
    <h2>Question Three</h2>
    <Link to="/question4">
            <button>Next</button>
    </Link>
    </>
    );
  }