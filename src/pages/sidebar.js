import '../styling/sidebar.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    return (
      <>
          <img className='menu-icon'  src="/images/egg-icon.png" alt="open navigation" /> 
          <nav className="sidebar"> 
            <div className="sidebar-background"></div>
            <img className="fried-egg" src="/images/sidebar-egg.png" alt="sidebar" />
            <div className="navlink-container" >  
              <NavLink className="navlink" to="/">Home</NavLink>
              <NavLink className="navlink" to="/loserboard">Loserboard</NavLink>
              <NavLink className="navlink" to="/dozen-steps">Our Dozen Step Program</NavLink>
              <NavLink className="navlink" to="/community-chat">Community Chat</NavLink>
            </div>
          </nav>
      </>
    )
}