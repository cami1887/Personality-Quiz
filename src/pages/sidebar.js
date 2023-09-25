import '../styling/sidebar.css';
// import MenuIcon from '@mui/icons-material/Menu';
// import CloseIcon from '@mui/icons-material/Close';
// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    // const [clicked, showMenu] = useState(false);
    // function ToggleMenu() {
    //     showMenu(!clicked);
    // }
    return (
        <>
        {/* <MenuIcon className='menu-icon' onClick={ToggleMenu} style={{visibility: clicked ? 'hidden' : 'visible'}}/> */}
        <img className='menu-icon'  src="/images/egg-icon.png" alt="open navigation" /> 
        {/*style=visibility: clicked ? 'hidden' : 'visible'*/}
        <nav className="sidebar"> 
        {/*style=visibility: clicked ? 'visible' : 'hidden' */}
          {/* <CloseIcon className="close-icon" onClick={ToggleMenu}/> */}
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