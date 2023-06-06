import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './logo.png';
import './navbar.css'

const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" />
          </div>
          <ul className="navbar-menu">
            
            <li className="navbar-item">
              <Link to="/logout" className="navbar-link">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  };

  export default Navbar;