import { Link } from 'react-router-dom';


export default function QuestionTwo() {
    return (
      <>
    <h2>Question Two</h2>
    <Link to="/question3">
            <button>Next</button>
    </Link>
    </>
    );
  }