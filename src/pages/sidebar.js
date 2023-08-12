// 
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { NavLink } from 'react-router-dom';

// let visibilityStatus= false;

// function showMenu() {
// visibilityStatus = !visibilityStatus;
// visibilityStatus ? visibilityStatus = 'visible' : visibilityStatus = 'hidden';
// console.log(visibilityStatus)
// }

export default function Sidebar() {
    return (
        <>
        <nav className="sidebar">
          <div className="navlink-container" >  
            <CloseIcon className="close-icon" />
            <NavLink className="navlink" to="/">Home</NavLink>
            <NavLink className="navlink" to="/loserboard">Top 10 Worst People (With Addresses)</NavLink>
            <NavLink className="navlink" to="/twelve-steps">12 Step Program</NavLink>
            <NavLink className="navlink" to="/community">Community</NavLink>
          </div>
        </nav>
        </>
        
    )
} 