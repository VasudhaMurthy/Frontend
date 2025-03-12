import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RideDetails.css';

const RideDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { driver } = location.state || {};

  const handleConfirmRide = () => {
    // Redirect to Payment page with driver and fare details
    navigate('/payment', { state: { driver, fare: driver.price } });
  };

  // const handleSOS = () => {
  //   window.location.href = 'tel:100'; // Dial 100
  // };

  return (
    <div className="ride-details">
      <h2>Ride Details</h2>
      {driver ? (
      
        <div className="driver-info">
          {/* <button className="sos-button" onClick={handleSOS}>
            Emergency SOS
          </button> */}
          <h3>{driver.name}</h3>
          <p>Mode of Transport: {driver.mode}</p>
          <p>Date: {driver.date}</p>
          <p>Time: {driver.time}</p>
          <p>Fare: ₹{driver.price}</p>
          {/* Add more details as needed */}
          
          <button onClick={handleConfirmRide}>Confirm Ride and Proceed to Payment</button>
        </div>
      ) : (
        <p>No driver details found</p>
      )}
    </div>
  );
};

export default RideDetails;
