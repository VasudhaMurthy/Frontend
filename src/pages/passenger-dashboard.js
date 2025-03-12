
// // passenger-dashboard.js
// import React, { useState, useEffect } from 'react';
// import Header from '../components/Passenger-Dashboard/Header';
// import Carpooling from '../components/Passenger-Dashboard/Carpooling';
// import Rewards from '../components/Passenger-Dashboard/Rewards';
// import { Button } from 'antd';
// import './passenger-dashboard.css';
// import BookingOptions from '../components/Passenger-Dashboard/BookingOptions';
// import PassengerBackground from "../Assets/passenger-background.png";
// //import RideBooking from '../components/Passenger-Dashboard/RideBooking';


// const PassengerDashboard = () => {
//   const [showBookingOptions, setShowBookingOptions] = useState(false);
//   const [showPooling, setShowPooling] = useState(false);
//   const [rewardsEnabled, setRewardsEnabled] = useState(false);

//   useEffect(() => {
//     // Reset rewards on dashboard load
//     setRewardsEnabled(false);
//   }, []);

//   const handleTravelChoice = (choice) => {
//     if (choice === 'pooling') {
//       setShowPooling(true);
//       setShowBookingOptions(false);
//       setRewardsEnabled(true); // Enable rewards for pooling
//     } else {
//       setShowPooling(false);
//       setShowBookingOptions(true);
//       setRewardsEnabled(false); // Disable rewards for cab booking
//     }
//   };

//   return (
//     <div style={{ backgroundImage: `url(${PassengerBackground})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//     <div className="passenger-dashboard-container">
//       <Header rewardsEnabled={rewardsEnabled} />
//       <div className="main-content">
//         {!showPooling && !showBookingOptions && (
//           <div className="travel-choice">
//             <h2>How would you like to travel?</h2>
//             <Button type="primary" onClick={() => handleTravelChoice('pooling')}>Carpooling</Button>
//             <Button type="primary" onClick={() => handleTravelChoice('cab')}>Normal Cab Booking</Button>
//           </div>
//         )}

//         {showPooling && (
//           <div>
//             <Carpooling />
//             <Rewards />
//           </div>
//         )}

//         {showBookingOptions && (
//           <div>
//             <BookingOptions />
//           </div>
//         )}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default PassengerDashboard;



import React, { useState, useEffect } from 'react';
import Header from '../components/Passenger-Dashboard/Header';
import Carpooling from '../components/Passenger-Dashboard/Carpooling';
import Rewards from '../components/Passenger-Dashboard/Rewards';
import { Button } from 'antd';
import './passenger-dashboard.css';
import BookingOptions from '../components/Passenger-Dashboard/BookingOptions';
import PassengerBackground from "../Assets/passenger-background.png";

const PassengerDashboard = () => {
  const [showBookingOptions, setShowBookingOptions] = useState(false);
  const [showPooling, setShowPooling] = useState(false);
  const [rewardsEnabled, setRewardsEnabled] = useState(false);

  useEffect(() => {
    // Reset rewards on dashboard load
    setRewardsEnabled(false);
  }, []);

  const handleTravelChoice = (choice) => {
    if (choice === 'pooling') {
      setShowPooling(true);
      setShowBookingOptions(false);
      setRewardsEnabled(true); // Enable rewards for pooling
    } else {
      setShowPooling(false);
      setShowBookingOptions(true);
      setRewardsEnabled(false); // Disable rewards for cab booking
    }
  };

  return (
    <div className="background-container" style={{ backgroundImage: `url(${PassengerBackground})`}}>
    <div className="passenger-dashboard-container">
      <Header rewardsEnabled={rewardsEnabled} />
      <div className="main-content">
        {!showPooling && !showBookingOptions && (
          <div className="travel-choice">
            <h2>How would you like to travel?</h2>
            <Button type="primary" onClick={() => handleTravelChoice('pooling')}>Carpooling</Button>
            <Button type="primary" onClick={() => handleTravelChoice('cab')}>Normal Cab Booking</Button>
          </div>
        )}

        {showPooling && (
          <div>
            <Carpooling />
            <Rewards />
          </div>
        )}

        {showBookingOptions && (
          <div>
            <BookingOptions />
          </div>
        )}
      </div>
    </div>
    </div>
  );
};

export default PassengerDashboard;

