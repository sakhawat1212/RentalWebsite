// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';



const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Epic Journey Rentals</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/rentals">Rentals</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/login">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
