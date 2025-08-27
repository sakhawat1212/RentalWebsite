import React from 'react';
import { Link } from 'react-router-dom';
import './RentalCards.css';

const RentalCard = ({ rental }) => {
  return (
    <div className="rental-card">
      <img src={rental.image} alt={rental.title} />
      <div className="rental-info">
        <h3>{rental.title}</h3>
        <p>{rental.location}</p>
        <p>PKR {rental.price}</p>
        <Link to={`/rentals/${rental.id}`}>
          <button className="view-btn">View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default RentalCard;
