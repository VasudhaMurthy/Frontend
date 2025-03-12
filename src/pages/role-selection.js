// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import BannerBackground from "../Assets/home-banner-background.png";
// import './role-selection.css';


// const RoleSelection = () => {
//   const navigate = useNavigate();
//   const [role, setRole] = useState('');

//   const handleRoleSelection = (e) => {
//     e.preventDefault();
//     if (role === 'driver') {
//       navigate('/dashboard/driver');
//     } else if (role === 'passenger') {
//       navigate('/dashboard/passenger');
//     }
//   };

//   const handleChange = (e) => {
//     setRole(e.target.value);
//   };

//   return (
//     <div style={{ backgroundImage: `url(${BannerBackground})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//       <div className="role-selection-container">
//         <h2>Select Your Role</h2>
//         <form onSubmit={handleRoleSelection}>
//           <div className="radio-group">
//             <input
//               type="radio"
//               name="role"
//               value="driver"
//               checked={role === 'driver'}
//               onChange={handleChange}
//             />
//             <label>Driver</label>
//           </div>
//           <div className="radio-group">
//             <input
//               type="radio"
//               name="role"
//               value="passenger"
//               checked={role === 'passenger'}
//               onChange={handleChange}
//             />
//             <label>Passenger</label>
//           </div>
//           <button className="submit-button" type="submit">Continue</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BannerBackground from "../Assets/home-banner-background.png";
import './role-selection.css';


const RoleSelection = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('');

  const handleRoleSelection = (e) => {
    e.preventDefault();
    if (role === 'driver') {
      navigate('/driver/post-ride');
    } else if (role === 'passenger') {
      navigate('/dashboard/passenger');
    }
  };

  const handleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div style={{ backgroundImage: `url(${BannerBackground})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="role-selection-container">
        <h2>Select Your Role</h2>
        <form onSubmit={handleRoleSelection}>
          <div className="radio-group">
            <input
              type="radio"
              name="role"
              value="driver"
              checked={role === 'driver'}
              onChange={handleChange}
            />
            <label>Driver</label>
          </div>
          <div className="radio-group">
            <input
              type="radio"
              name="role"
              value="passenger"
              checked={role === 'passenger'}
              onChange={handleChange}
            />
            <label>Passenger</label>
          </div>
          <button className="submit-button" type="submit">Continue</button>
        </form>
      </div>
    </div>
  );
};

export default RoleSelection;

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './role-selection.css';

// const RoleSelection = () => {
//   return (
//     <div className="role-selection">
//       <h2>Select Your Role</h2>
//       <div className="role-options">
//         <Link to="/dashboard/passenger" className="role-link">
//           <button>Passenger</button>
//         </Link>
//         <Link to="/driver/post-ride" className="role-link">
//           <button>Driver</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RoleSelection;
