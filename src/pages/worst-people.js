import { Link } from 'react-router-dom';

export default function Loserboard() {
    return (
      <main>
        <ol className="leaderboard">
          <li> You
            <Link to="https://www.google.com/maps">
              <button className="address-button" >Address</button>
            </Link>
          </li>
        </ol>
      </main>
    );
  }