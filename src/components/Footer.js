// src/components/Footer.js
import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#eee' }}>
      <p>&copy; {new Date().getFullYear()} RentalApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
