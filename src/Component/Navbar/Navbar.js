import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
 <nav className="navbar">
        <NavLink to='/' className="logo">Kristine</NavLink>
        <div className="nav-links">
            <ul className="nav-menu">
                <li><NavLink to='/Home1' className='drop'>Home</NavLink></li>
                <li><NavLink to='/About' className='drop'>About me</NavLink></li>
                <li><NavLink to='/Service' className='drop' id='ddd'>Service </NavLink> </li>
              
                  <li><NavLink to='/Face' className ='drop'>Face</NavLink></li>
                   <li><NavLink to='/Body' className ='drop'>Body</NavLink></li>
                   <li><NavLink to='/Nail' className ='drop'>Nail</NavLink></li>
        
                
                <li><NavLink to='/Contact' className='drop'>Contact</NavLink></li>
               
            </ul>
        </div>
        <i className='bx bx-grid-alt menu-hamburger'></i>
    </nav>
    </div>

  )
}

export default Navbar;