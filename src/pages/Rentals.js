// src/pages/Rentals.js
import React, { useState } from 'react';
import RentalCard from '../components/RentalCard';
import { rentals } from '../data/rentalsData';
import './Rentals.css';

const Rentals = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const filteredRentals = rentals.filter((rental) => {
    const matchesSearch = rental.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          rental.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || rental.category === categoryFilter;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="rentals-page">
      <h2 className="rentals-title">Available Rentals</h2>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search by title or location..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="House">House</option>
          <option value="Car">Car</option>
          <option value="Camera">Camera</option>
          <option value="Camping">Camping</option>
        </select>
      </div>

      <div className="rental-grid">
        {filteredRentals.length > 0 ? (
          filteredRentals.map((rental) => (
            <RentalCard key={rental.id} rental={rental} />
          ))
        ) : (
          <p>No rentals found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default Rentals;
