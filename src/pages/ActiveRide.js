import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PaymentReceivedGif from '../Assets/payment-received.gif'; // Add this GIF
import './ActiveRide.css';

const ActiveRide = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passenger, rideDetails } = location.state || {};
  
  const [rideStatus, setRideStatus] = useState('ongoing'); // 'ongoing', 'ended', 'payment_received'
  
  const handleEndRide = () => {
    setRideStatus('ended');
    
    // Simulate payment received after 5 seconds
    setTimeout(() => {
      setRideStatus('payment_received');
    }, 5000);
  };
  
  const goToDashboard = () => {
    navigate('/role-selection');
  };
  
  return (
    <div className="active-ride-container">
      <h2>Active Ride</h2>
      
      {rideStatus === 'payment_received' ? (
        <div className="payment-received">
          <h3>Payment Received!</h3>
          <img src={PaymentReceivedGif} alt="Payment received" />
          <p>The passenger has paid for the ride.</p>
          <button onClick={goToDashboard} className="dashboard-btn">
            Go to Dashboard
          </button>
        </div>
      ) : (
        <>
          <div className="ride-details">
            <h3>Ride Information</h3>
            <p><strong>From:</strong> {rideDetails?.starting}</p>
            <p><strong>To:</strong> {rideDetails?.ending}</p>
            <p><strong>Date:</strong> {rideDetails?.date}</p>
            <p><strong>Time:</strong> {rideDetails?.time}</p>
            <p><strong>Mode:</strong> {rideDetails?.mode}</p>
          </div>
          
          <div className="passenger-details">
            <h3>Passenger Information</h3>
            <p><strong>Name:</strong> {passenger?.name}</p>
            <p><strong>Rating:</strong> {passenger?.rating}/5</p>
            <p><strong>Number of passengers:</strong> {passenger?.passengers}</p>
          </div>
          
          {rideStatus === 'ongoing' ? (
            <button 
              className="end-ride-btn"
              onClick={handleEndRide}
            >
              End Ride
            </button>
          ) : (
            <div className="waiting-payment">
              <p>Waiting for payment...</p>
              {/* Add a loading spinner or animation here */}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ActiveRide;
