import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { rentals } from '../data/rentalsData';
import './RentalDetails.css';

const RentalDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const rental = rentals.find((r) => r.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: '',
    fromDate: '',
    toDate: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!rental) return <h2>Rental not found</h2>;

  return (
    <div className="rental-details">
      <img src={rental.image} alt={rental.title} className="details-img" />
      <div className="details-info">
        <h2>{rental.title}</h2>
        <p><strong>Location:</strong> {rental.location}</p>
        <p><strong>Category:</strong> {rental.category}</p>
        <p><strong>Price:</strong> PKR {rental.price}</p>
      </div>

      <div className="booking-form">
        <h3>Book This Rental</h3>
        {submitted ? (
          <p className="success-msg">✅ Booking request submitted successfully!</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="date-group">
              <input
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Any message or request?"
              value={formData.message}
              onChange={handleChange}
              rows="4"
            ></textarea>
            <button type="submit" className="book-btn">Submit Booking</button>
          </form>
        )}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
    </div>
  );
};

export default RentalDetails;
