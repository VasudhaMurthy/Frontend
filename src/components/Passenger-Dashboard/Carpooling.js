// import React, { useState } from 'react';
// import { List, Avatar, Button } from 'antd';
// import './Carpooling.css';

// const Carpooling = () => {
//   const [isAvailable, setIsAvailable] = useState(false);
//   const [passengers, setPassengers] = useState([]);

//   const findPassengers = () => {
//     // Simulate passenger matching
//     setPassengers([
//       { id: 1, name: 'Sarah Johnson', rating: 4.9, pickup: '2nd Ave' },
//       { id: 2, name: 'Mike Chen', rating: 4.8, pickup: 'Main Station' }
//     ]);
//     setIsAvailable(true);
//   };

//   return (
//     <div className="carpooling">
//       <h2>Carpool Matching</h2>
//       <Button 
//         type={isAvailable ? 'default' : 'primary'} 
//         onClick={findPassengers}
//       >
//         {isAvailable ? 'Stop Matching' : 'Find Drivers'}
//       </Button>
      
//       {isAvailable && passengers.length > 0 && (
//         <List
//           dataSource={passengers}
//           renderItem={passenger => (
//             <List.Item>
//               <List.Item.Meta
//                 avatar={<Avatar>{passenger.name[0]}</Avatar>}
//                 title={passenger.name}
//                 description={`Pickup: ${passenger.pickup} • Rating: ${passenger.rating}/5`}
//               />
//               <Button>Connect</Button>
//             </List.Item>
//           )}
//         />
//       )}
//     </div>
//   );
// };

// export default Carpooling;


// components/Passenger-Dashboard/Carpooling.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Carpooling.css';

const Carpooling = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    mode: 'auto',
    leavingFrom: '',
    goingTo: '',
    date: '',
    passengers: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to fetch available drivers (using mock data for now)
    // For example:
    const availableDrivers = [
      { id: 1, name: 'Driver 1', mode: 'car', from: 'Location A', to: 'Location B', date: '2025-03-11', time: '09:00', capacity: 3, price: 100, rating: 4.5, tripsCompleted: 50 },
      { id: 2, name: 'Driver 2', mode: 'car', from: 'Location A', to: 'Location B', date: '2025-03-11', time: '09:30', capacity: 2, price: 120, rating: 4.2, tripsCompleted: 35 },
    ];

    navigate('/available-drivers', { state: { searchData: formData, drivers: availableDrivers } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="carpooling-container">
      <form onSubmit={handleSubmit} >
        <div className="input-group">
          <div className="input-item">
            <label htmlFor="leavingFrom">Leaving From</label>
            <input
              type="text"
              id="leavingFrom"
              name="leavingFrom"
              value={formData.leavingFrom}
              onChange={handleChange}
              placeholder="Enter starting location"
            />
          </div>
          <div className="input-item">
            <label htmlFor="goingTo">Going To</label>
            <input
              type="text"
              id="goingTo"
              name="goingTo"
              value={formData.goingTo}
              onChange={handleChange}
              placeholder="Enter destination"
            />
          </div>
          <div className="input-item">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </div>
          <div className="input-item">
            <label htmlFor="passengers">Passengers</label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
            >
              {[1, 2, 3, 4].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>
          </div>
          <div className="input-item">
            <label htmlFor="mode">Mode of Transport</label>
            <select
              id="mode"
              name="mode"
              value={formData.mode}
              onChange={handleChange}
            >
              <option value="auto">Auto</option>
              <option value="car">Car</option>
              <option value="twowheeler">Two Wheeler</option>
            </select>
          </div>
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};

export default Carpooling;
