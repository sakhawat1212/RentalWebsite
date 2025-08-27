// src/components/Layout.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <main  className="container" style={{ minHeight: '80vh', padding: '1rem' }}>
        <Outlet /> {/* This renders the current page */}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
