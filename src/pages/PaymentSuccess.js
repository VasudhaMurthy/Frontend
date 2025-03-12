import React from 'react';
import { useLocation } from 'react-router-dom';
import './PaymentSuccess.css';

const PaymentSuccess = () => {
  const location = useLocation();
  //const navigate = useNavigate();
  const { driver } = location.state || {};

  return (
    <div className="payment-success">
      <h2>Payment Successful!</h2>
      {driver ? (
        <div className="driver-info">
          <h3>You have successfully finished your trip with {driver.name}!</h3>
        </div>
      ) : (
        <p>No booking details found</p>
      )}
    </div>
  );
};

export default PaymentSuccess;
