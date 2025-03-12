// // pages/AvailableDrivers.js
// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import PendingGif from '../Assets/pending.gif';
// import AcceptedGif from '../Assets/Approval.gif';
// import RejectedGif from '../Assets/Rejected.gif';
// import './AvailableDrivers.css';

// const AvailableDrivers = () => {
//     const location = useLocation();
//     const { searchData, drivers } = location.state || {};
//     const [selectedDriver, setSelectedDriver] = useState(null);
//     const [bookingStatus, setBookingStatus] = useState('idle'); // 'idle', 'pending', 'accepted', 'rejected'
//     const [driverContact, setDriverContact] = useState(null);
  
//     const filteredDrivers = drivers?.filter(driver =>
//       driver.mode === searchData?.mode &&
//       driver.from.toLowerCase() === searchData?.leavingFrom.toLowerCase() &&
//       driver.to.toLowerCase() === searchData?.goingTo.toLowerCase() &&
//       driver.date === searchData?.date &&
//       driver.capacity >= searchData?.passengers
//     ) || [];
  
//     const handleBookDriver = (driver) => {
//       setSelectedDriver(driver);
//       setBookingStatus('pending');
//       setDriverContact(null);
  
//       // Simulate approval/rejection after 5 seconds
//       setTimeout(() => {
//         const isAccepted = Math.random() > 0.5; // Simulate random acceptance
//         if (isAccepted) {
//           setBookingStatus('accepted');
//           setDriverContact('9876543210'); // Mock driver contact
//         } else {
//           setBookingStatus('rejected');
//         }
//       }, 5000);
//     };
  
//     const resetBooking = () => {
//       setSelectedDriver(null);
//       setBookingStatus('idle');
//       setDriverContact(null);
//     };
  
//     if (bookingStatus === 'pending') {
//       return (
//         <div className="booking-status">
//           <h2>Waiting for Driver Approval...</h2>
//           <img src={PendingGif} alt="Pending Approval" />
//         </div>
//       );
//     }
  
//     if (bookingStatus === 'rejected') {
//       return (
//         <div className="booking-status">
//           <h2>Sorry, the driver rejected your request.</h2>
//           <img src={RejectedGif} alt="Request Rejected" />
//           <button onClick={resetBooking}>Go Back to Search Results</button>
//         </div>
//       );
//     }
  
//     if (bookingStatus === 'accepted') {
//       return (
//         <div className="booking-status">
//           <h2>Your Ride is Confirmed!</h2>/
//           <img src={AcceptedGif} alt="Request Accepted" />
//           <div className="driver-info">
//             <h3>{selectedDriver.name}</h3>
//             <p>Mode of Transport: {selectedDriver.mode}</p>
//             <p>Date: {selectedDriver.date}</p>
//             <p>Time: {selectedDriver.time}</p>
//             <p>Contact Driver: {driverContact}</p>
//           </div>
//           <button onClick={resetBooking}>Go Back to Search Results</button>
//         </div>
//       );
//     }
  
//     return (
//       <div className="available-drivers">
//         <h2>Available Drivers</h2>
//         {filteredDrivers.length === 0 ? (
//           <p>No drivers available matching your criteria</p>
//         ) : (
//           <div className="drivers-list">
//             {filteredDrivers.map(driver => (
//               <div key={driver.id} className="driver-card">
//                 <h3>{driver.name}</h3>
//                 <div className="driver-details">
//                   <p>Mode: {driver.mode.toUpperCase()}</p>
//                   <p>Date: {driver.date}</p>
//                   <p>Time: {driver.time}</p>
//                   <p>Available Seats: {driver.capacity}</p>
//                   <p>Price: ₹{driver.price}</p>
//                   <p>Rating: {driver.rating}/5 ({driver.tripsCompleted} trips completed)</p>
//                 </div>
//                 <button
//                   className="book-button"
//                   onClick={() => handleBookDriver(driver)}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     );
//   };
  
//   export default AvailableDrivers;

// AvailableDrivers.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PendingGif from '../Assets/pending.gif';
import RejectedGif from '../Assets/Rejected.gif';
import PassengerBackground from "../Assets/profile-background.jpg";
import './AvailableDrivers.css';

const AvailableDrivers = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { searchData, drivers } = location.state || {};
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [bookingStatus, setBookingStatus] = useState('idle');

  const filteredDrivers = drivers?.filter(driver =>
    driver.mode === searchData?.mode &&
    driver.from.toLowerCase() === searchData?.leavingFrom.toLowerCase() &&
    driver.to.toLowerCase() === searchData?.goingTo.toLowerCase() &&
    driver.date === searchData?.date &&
    driver.capacity >= searchData?.passengers
  ) || [];

  const handleBookDriver = (driver) => {
    setSelectedDriver(driver);
    setBookingStatus('pending');
  
    setTimeout(() => {
      const isAccepted = Math.random() > 0.5;
      if (isAccepted) {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit OTP
        setBookingStatus('accepted');
        navigate('/ride-details', { state: { driver, otp } }); // Pass OTP
      } else {
        setBookingStatus('rejected');
      }
    }, 5000);
  };

  const resetBooking = () => {
    setSelectedDriver(null);
    setBookingStatus('idle');
  };

  if (bookingStatus === 'pending') {
    return (
      
      <div className="booking-status">
        <h2>Waiting for Driver Approval...</h2>
        <img src={PendingGif} alt="Pending Approval" />
      </div>
    );
  }

  if (bookingStatus === 'rejected') {
    return (
      <div className="booking-status">
        <h2>Sorry, the driver rejected your request.</h2>
        <img src={RejectedGif} alt="Request Rejected" />
        <button onClick={resetBooking}>Go Back to Search Results</button>
      </div>
    );
  }

  return (
    <div className="background-container" style={{ backgroundImage: `url(${PassengerBackground})`}}>
    <div className="available-drivers">
      <h2>Available Drivers</h2>
      {filteredDrivers.length === 0 ? (
        <p>No drivers available matching your criteria</p>
      ) : (
        <div className="drivers-list">
          {filteredDrivers.map(driver => (
            <div key={driver.id} className="driver-card">
              <h3>{driver.name}</h3>
              <div className="driver-details">
                <p>Mode: {driver.mode.toUpperCase()}</p>
                <p>Date: {driver.date}</p>
                <p>Time: {driver.time}</p>
                <p>Available Seats: {driver.capacity}</p>
                <p>Price: ₹{driver.price}</p>
                <p>Rating: {driver.rating}/5 ({driver.tripsCompleted} trips completed)</p>
              </div>
              <button className="book-button" onClick={() => handleBookDriver(driver)}>Book Now</button>
            </div>
          ))}
        </div>
      )}
    </div>
    </div>
  );
};

export default AvailableDrivers;

