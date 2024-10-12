import React from 'react';
import './Navbar.css';
import logo from '../../billeder-social-media-app\\logo-warm.webp';


function Navbar() {
    return (
      <nav className="navbar">
        <img src={logo} className="app-logo" alt="logo" />
        <h1 className="title">Social Media App</h1>

      </nav>
    );
  }

export default Navbar;
