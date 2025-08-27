// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Rentals from './pages/Rentals';
import RentalDetails from './pages/RentalDetails';
import './App.css'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="rentals" element={<Rentals />} />
          <Route path="rentals/:id" element={<RentalDetails />} />
          {/* Add more pages below */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
