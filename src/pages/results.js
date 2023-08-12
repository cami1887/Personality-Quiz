import { Link } from 'react-router-dom';

export default function Results() {
    return (
      <>
    <h2>You're a ... BAD HORRIBLE PERSON</h2>
    <p>
        you're bad and you smell and nobody likes you
    </p>
    <Link to="/twelve-steps">
            <button>Find Out How To Better Yourself</button>
    </Link>
    </>
    );
  }