import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './PostRide.css';

const PostRide = () => {
  const navigate = useNavigate();
  const [rideDetails, setRideDetails] = useState({
    starting: '',
    ending: '',
    date: '',
    time: '',
    capacity: 1,
    mode: 'car'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRideDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/driver/waiting-requests', { state: { rideDetails } });
  };

  return (
    <div className="post-ride-container">
      <h2>Post a New Ride</h2>
      <form onSubmit={handleSubmit} className="ride-form">
        <div className="form-group">
          <label htmlFor="starting">Starting Location</label>
          <input 
            type="text" 
            id="starting" 
            name="starting" 
            value={rideDetails.starting}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ending">Ending Location</label>
          <input 
            type="text" 
            id="ending" 
            name="ending" 
            value={rideDetails.ending}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input 
            type="date" 
            id="date" 
            name="date" 
            value={rideDetails.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="time">Time</label>
          <input 
            type="time" 
            id="time" 
            name="time" 
            value={rideDetails.time}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="capacity">Maximum Passengers</label>
          <select 
            id="capacity" 
            name="capacity" 
            value={rideDetails.capacity}
            onChange={handleChange}
            required
          >
            {[1, 2, 3, 4, 5, 6].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="mode">Mode of Transportation</label>
          <select 
            id="mode" 
            name="mode" 
            value={rideDetails.mode}
            onChange={handleChange}
            required
          >
            <option value="car">Car</option>
            <option value="bike">Bike</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <button type="submit" className="submit-btn">Post Ride</button>
      </form>
    </div>
  );
};

export default PostRide;
