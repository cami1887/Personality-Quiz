import '../styling/sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
      <>
          <img className='menu-icon'  src="/images/egg-icon.png" alt="open navigation" /> 
          <nav className="sidebar"> 
            <div className="sidebar-background"></div>
            <img className="fried-egg" src="/images/friedegg.png" alt="sidebar" />
            <div className="navlink-container" >  
              <NavLink className="navlink" to="/">Home</NavLink>
              <NavLink className="navlink" to="/loserboard">Top 10 Worst People</NavLink>
              <NavLink className="navlink" to="/twelve-steps">12 Step Program</NavLink>
              <NavLink className="navlink" to="/forum">Community</NavLink>
            </div>
          </nav>
      </>
    )
}