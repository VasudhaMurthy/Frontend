// Rating.js
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Rating.css';

const Rating = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { driver } = location.state || {};

  const [ratings, setRatings] = useState({
    safety: 0,
    speed: 0,
    timing: 0,
  });

  const handleRatingChange = (category, value) => {
    setRatings({ ...ratings, [category]: value });
  };

  const handleSubmit = () => {
    // Here, you would typically send the ratings data to your backend
    // For now, let's just log the ratings and redirect to the dashboard
    console.log('Ratings:', ratings);
    navigate('/dashboard/passenger');
  };

  return (
    <div className="rating-page">
      <h2>Rate Your Driver</h2>
      {driver ? (
        <div className="driver-info">
          <h3>{driver.name}</h3>
          <p>Please rate your experience with this driver.</p>

          <div className="rating-category">
            <label>Safety:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={ratings.safety}
              onChange={(e) => handleRatingChange('safety', parseInt(e.target.value))}
            />
          </div>

          <div className="rating-category">
            <label>Speed:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={ratings.speed}
              onChange={(e) => handleRatingChange('speed', parseInt(e.target.value))}
            />
          </div>

          <div className="rating-category">
            <label>Timing:</label>
            <input
              type="number"
              min="1"
              max="5"
              value={ratings.timing}
              onChange={(e) => handleRatingChange('timing', parseInt(e.target.value))}
            />
          </div>

          <button onClick={handleSubmit}>Submit Ratings</button>
        </div>
      ) : (
        <p>No driver details found.</p>
      )}
    </div>
  );
};

export default Rating;
