import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { rentals } from '../data/rentalsData';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Discover Amazing Rentals</h1>
          <p>Find houses, cars, gear and more — all in one place.</p>
          <Link to="/rentals">
            <button className="hero-btn">Browse Rentals</button>
          </Link>
        </div>
      </div>

      {/* Popular Rentals Section */}
      <div className="popular-section">
        <h2>Popular Rentals</h2>
        <div className="popular-grid">
          {rentals.slice(0, 4).map((rental) => (
            <div className="popular-card" key={rental.id}>
              <img src={rental.image} alt={rental.title} />
              <div className="popular-info">
                <h3>{rental.title}</h3>
                <p>{rental.location}</p>
                <span className="price">PKR {rental.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
