import '../styling/sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
      <>
          <img className='menu-icon'  src="/images/egg-icon2.png" alt="open navigation" /> 
          <nav className="sidebar"> 
            <div className="sidebar-background"></div>
            <img className="fried-egg" src="/images/friedegg.png" alt="sidebar" />
            <div className="navlink-container" >  
              <NavLink className="navlink" to="/">Home</NavLink>
              <NavLink className="navlink" to="/loserboard">Loserboard</NavLink>
              <NavLink className="navlink" to="/twelve-steps">Our Dozen Step Program</NavLink>
              <NavLink className="navlink" to="/forum">Community Chat</NavLink>
            </div>
          </nav>
      </>
    )
}