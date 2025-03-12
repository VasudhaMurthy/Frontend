// import React, { useState, useEffect } from 'react';
// import { List, Avatar, Button } from 'antd';
// import { CarOutlined } from '@ant-design/icons';

// const RideBooking = () => {
//   const [rides, setRides] = useState([]);
//   const [availableRides, setAvailableRides] = useState([]);

//   useEffect(() => {
//     setAvailableRides([
//       {
//         id: 1,
//         from: 'Central Business District',
//         to: 'Tech Park Zone',
//         distance: 12.5,
//         price: 150,
//         departure: '08:30 AM'
//       },
//       {
//         id: 2,
//         from: 'Residential North',
//         to: 'Downtown',
//         distance: 8.2,
//         price: 100,
//         departure: '09:15 AM'
//       }
//     ]);
//   }, []);

//   const bookRide = (rideId) => {
//     const selectedRide = availableRides.find(r => r.id === rideId);
//     setRides([...rides, { ...selectedRide, status: 'booked' }]);
//     setAvailableRides(availableRides.filter(r => r.id !== rideId));
//   };

//   return (
//     <div className="ride-booking">
//       <h2><CarOutlined /> Available Rides</h2>
//       <List
//         itemLayout="horizontal"
//         dataSource={availableRides}
//         renderItem={ride => (
//           <List.Item
//             actions={[
//               <Button type="primary" onClick={() => bookRide(ride.id)}>
//                 Book Ride
//               </Button>
//             ]}
//           >
//             <List.Item.Meta
//               avatar={<Avatar icon={<CarOutlined />} />}
//               title={`${ride.from} → ${ride.to}`}
//               description={`${ride.distance} km • ₹${ride.price} • Departs ${ride.departure}`}
//             />
//           </List.Item>
//         )}
//       />
//       <h2>Your Booked Rides</h2>
//       {rides.map(ride => (
//         <div key={ride.id} className="ride-card">
//           <h3>{ride.from} → {ride.to}</h3>
//           <p>Price: ₹{ride.price}</p>
//           <p>Departure: {ride.departure}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default RideBooking;

import React from 'react';
import { Button } from 'antd';
import { CarOutlined } from '@ant-design/icons';
import './RideBooking.css';

const RideBooking = () => {
  const handleBooking = () => {
    // Redirect to external cab booking platform
    window.open('https://www.examplecabbooking.com', '_blank');
  };

  return (
    <div className="ride-booking">
      <h2><CarOutlined /> Normal Cab Booking</h2>
      <p>Please click below to proceed with normal cab booking.</p>
      <Button type="primary" onClick={handleBooking}>
        Book Now
      </Button>
    </div>
  );
};

export default RideBooking;
