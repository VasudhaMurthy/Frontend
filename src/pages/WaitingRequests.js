import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import NoRequestsGif from '../Assets/no-requests.gif'; // Add this GIF
import './WaitingRequests.css';

const WaitingRequests = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { rideDetails } = location.state || {};
  
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Simulate passenger requests after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      
      // Mock passenger requests
      const mockRequests = [
        {
          id: 1,
          name: 'John Doe',
          rating: 4.8,
          from: rideDetails.starting,
          to: rideDetails.ending,
          passengers: 2,
          requestTime: new Date().toLocaleTimeString()
        },
        {
          id: 2,
          name: 'Jane Smith',
          rating: 4.5,
          from: rideDetails.starting,
          to: rideDetails.ending,
          passengers: 1,
          requestTime: new Date().toLocaleTimeString()
        },
        {
          id: 3,
          name: 'Alex Johnson',
          rating: 4.9,
          from: rideDetails.starting,
          to: rideDetails.ending,
          passengers: 3,
          requestTime: new Date().toLocaleTimeString()
        }
      ];
      
      setRequests(mockRequests);
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [rideDetails]);
  
  const handleAccept = (request) => {
    navigate('/driver/active-ride', { state: { passenger: request, rideDetails } });
  };
  
  const handleReject = (requestId) => {
    setRequests(requests.filter(req => req.id !== requestId));
  };
  
  return (
    <div className="waiting-requests-container">
      <h2>Your Posted Ride</h2>
      <div className="ride-details-summary">
        <p><strong>From:</strong> {rideDetails?.starting}</p>
        <p><strong>To:</strong> {rideDetails?.ending}</p>
        <p><strong>Date:</strong> {rideDetails?.date}</p>
        <p><strong>Time:</strong> {rideDetails?.time}</p>
        <p><strong>Capacity:</strong> {rideDetails?.capacity} passengers</p>
        <p><strong>Mode:</strong> {rideDetails?.mode}</p>
      </div>
      
      <h3>Passenger Requests</h3>
      {loading ? (
        <div className="no-requests">
          <p>Waiting for passenger requests...</p>
          {/* <img src={NoRequestsGif} alt="No requests yet" /> */}
        </div>
      ) : requests.length > 0 ? (
        <div className="requests-list">
          {requests.map(request => (
            <div key={request.id} className="request-card">
              <div className="request-details">
                <h4>{request.name}</h4>
                <p><strong>Rating:</strong> {request.rating}/5</p>
                <p><strong>Passengers:</strong> {request.passengers}</p>
                <p><strong>Requested at:</strong> {request.requestTime}</p>
              </div>
              <div className="request-actions">
                <button 
                  className="accept-btn"
                  onClick={() => handleAccept(request)}
                >
                  Accept
                </button>
                <button 
                  className="reject-btn"
                  onClick={() => handleReject(request.id)}
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No passenger requests at this time.</p>
      )}
    </div>
  );
};

export default WaitingRequests;
