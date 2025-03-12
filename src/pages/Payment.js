// import React, { useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Payment.css';

// const Payment = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { driver, fare } = location.state || {};
//   const [useRewards, setUseRewards] = useState(false);
//   const [paymentSuccessful, setPaymentSuccessful] = useState(false);

//   const handlePayment = () => {
//     // Simulate payment processing
//     setTimeout(() => {
//       setPaymentSuccessful(true); // Simulate success
//       navigate('/PaymentSuccess', { state: { driver } });
//     }, 2000);
//   };

//   return (
//     <div className="payment-page">
//       <h2>Payment</h2>
//       {driver ? (
//         <div className="payment-details">
//           <p>Driver: {driver.name}</p>
//           <p>Mode of Transport: {driver.mode}</p>
//           <p>Fare: ₹{fare}</p>
//           <label>
//             <input
//               type="checkbox"
//               checked={useRewards}
//               onChange={() => setUseRewards(!useRewards)}
//             />
//             Use Reward Points
//           </label>
//           <button onClick={handlePayment} disabled={paymentSuccessful}>
//             {paymentSuccessful ? 'Processing...' : 'Pay Now'}
//           </button>
//         </div>
//       ) : (
//         <p>No payment details found</p>
//       )}
//     </div>
//   );
// };

// export default Payment;

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Payment.css';

const Payment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { driver, fare } = location.state || {};
  const [useRewards, setUseRewards] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);

  const handlePayment = () => {
    // Simulate payment processing
    setTimeout(() => {
      setPaymentSuccessful(true); // Simulate success
      // Redirect to the rating page after successful payment
      navigate('/rating', { state: { driver } });
    }, 2000);
  };

  return (
    <div className="payment-page">
      <h2>Payment</h2>
      {driver ? (
        <div className="payment-details">
          <p>Driver: {driver.name}</p>
          <p>Mode of Transport: {driver.mode}</p>
          <p>Fare: ₹{fare}</p>
          <label>
            <input
              type="checkbox"
              checked={useRewards}
              onChange={() => setUseRewards(!useRewards)}
            />
            Use Reward Points
          </label>
          <button onClick={handlePayment} disabled={paymentSuccessful}>
            {paymentSuccessful ? 'Processing...' : 'Pay Now'}
          </button>
        </div>
      ) : (
        <p>No payment details found</p>
      )}
    </div>
  );
};

export default Payment;
