import React from 'react';
import './BookingOptions.css'; // Import CSS file
import olaLogo from '../../Assets/ola-logo.png';     // Import logos
import uberLogo from '../../Assets/uber-logo.png';   // Replace with actual paths
import nammayaatriLogo from '../../Assets/nammayatri-logo.png';
import rapidoLogo from '../../Assets/rapido-logo.png';


// const BookingOptions = () => {
//   const handleBooking = (platform) => {
//     // Replace with actual booking logic/redirect
//     console.log(`Redirecting to ${platform}`);
//     window.open(`https://www.${platform}.com`, '_blank'); // Simple redirect example
//   };

//   return (
//     <div className="booking-options-container">
//       <h2>Choose Your Ride</h2>
//       <div className="booking-option" onClick={() => handleBooking('ola')}>
//         <img src={olaLogo} alt="Ola Logo" className="booking-logo" />
//         <span>Book with Ola</span>
//       </div>
//       <div className="booking-option" onClick={() => handleBooking('uber')}>
//         <img src={uberLogo} alt="Uber Logo" className="booking-logo" />
//         <span>Book with Uber</span>
//       </div>
//       <div className="booking-option" onClick={() => handleBooking('nammayatri')}>
//         <img src={nammayaatriLogo} alt="Namma Yatri Logo" className="booking-logo" />
//         <span>Book with Namma Yatri</span>
//       </div>
//       <div className="booking-option" onClick={() => handleBooking('rapido')}>
//         <img src={rapidoLogo} alt="Rapido Logo" className="booking-logo" />
//         <span>Book with Rapido</span>
//       </div>
//     </div>
//   );
// };

// export default BookingOptions;

const BookingOptions = () => {
  return (
      <div className="booking-options-container">
      <h2>Choose Your Ride</h2>
      <div className="booking-grid">
        <a href="https://book.olacabs.com/" target="_blank" rel="noopener noreferrer" className="booking-option">
          <img src={olaLogo} alt="Ola Logo" className="booking-logo" />
        </a>
        <a href="https://www.uber.com/in/en/ride/" target="_blank" rel="noopener noreferrer" className="booking-option">
          <img src={uberLogo} alt="Uber Logo" className="booking-logo" />
        </a>
        <a href="https://nammayatri.in/" target="_blank" rel="noopener noreferrer" className="booking-option">
          <img src={nammayaatriLogo} alt="Namma Yatri Logo" className="booking-logo" />
        </a>
        <a href="https://www.rapido.bike/Home" target="_blank" rel="noopener noreferrer" className="booking-option">
          <img src={rapidoLogo} alt="Rapido Logo" className="booking-logo" />
        </a>
      </div>
      </div>
  );
};

export default BookingOptions;
