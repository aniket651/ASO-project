import React from 'react';
import {Link} from 'react-router-dom';
import './navbar2.css';

const Navbar2 = () => {
    return (
      <nav className="secondary-navbar">
        <div className="secondary-navbar-container">
          
          <ul className="secondary-navbar-menu">
            <li className="secondary-navbar-item">
              <Link to="/" className="secondary-navbar-link">Home</Link>
            </li>
            <li className="secondary-navbar-item">
              <Link to="/sku-validate" className="secondary-navbar-link">SKU Validate</Link>
            </li>
            <li className="secondary-navbar-item">
              <Link to="/sku-radial-validate" className="secondary-navbar-link">SKU Radial Validate</Link>
            </li>
            <li className="secondary-navbar-item">
              <Link to="/sku-search" className="secondary-navbar-link">SKU Search</Link>
            </li>
            <li className="secondary-navbar-item">
              <Link to="/inventory-lookup" className="secondary-navbar-link">Inventory Lookup from Yantriks</Link>
            </li>
            <li className="secondary-navbar-item">
              <Link to="/contact-us" className="secondary-navbar-link">Contact Us</Link>
            </li>
            
          </ul>
        </div>
      </nav>
    );
  };
  

  export default Navbar2;