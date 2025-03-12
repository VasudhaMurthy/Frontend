// // Profile.js
// import React from 'react';
// import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext
// import ProfilePic from '../Assets/Profile.jpeg'; // Import the Profile component
// import './Profile.css';
// import Background from '../Assets/hero-bg.png';

// const Profile = () => {
//   const { user } = useAuth(); // Get user information from AuthContext

//   // Mock ride history data (replace with your actual data)
//   const rideHistory = [
//     { id: 1, date: '2024-01-01', from: 'Location A', to: 'Location B' },
//     { id: 2, date: '2024-01-05', from: 'Location C', to: 'Location D' },
//     { id: 3, date: '2024-01-10', from: 'Location E', to: 'Location F' },
//   ];

//   return (
//     <div style={{ backgroundImage: `url(${Background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
//     <div className="profile-container1">
//       <h2>Your Profile</h2>
//       {user ? (
//         <div className="profile-info">
//           <img src={ProfilePic} alt="Profile" className="profile-image1" />
//           <p><strong>First Name: NithinKumar</strong> {user.firstName}</p>
//           <p><strong>Last Name: HS</strong> {user.lastName}</p>
//           <p><strong>Email:</strong> {user.email}</p>
//           <p><strong>Password:</strong> ********</p> {/* Masked password */}
//           <p><strong>Aadhar Number: Not willing to disclose</strong> {user.aadharNumber}</p>
//           <h3>Ride History</h3>
//           <ul className="ride-history">
//             {rideHistory.map(ride => (
//               <li key={ride.id}>
//                 {ride.date}: {ride.from} to {ride.to}
//               </li>
//             ))}
//           </ul>
//         </div>
//       ) : (
//         <p>Please log in to view your profile.</p>
//       )}
//     </div>
//     </div>
//   );
// };

// export default Profile;


import React from 'react';
import { useAuth } from '../context/AuthContext'; // Assuming you have an AuthContext
import ProfilePic from '../Assets/Profile.jpeg'; // Import the Profile component
import './Profile.css';
import Background from '../Assets/hero-bg.png';

const Profile = () => {
  const { user } = useAuth(); // Get user information from AuthContext

  // Mock ride history data (replace with your actual data)
  const rideHistory = [
    { id: 1, date: '2024-01-01', from: 'Location A', to: 'Location B' },
    { id: 2, date: '2024-01-05', from: 'Location C', to: 'Location D' },
    { id: 3, date: '2024-01-10', from: 'Location E', to: 'Location F' },
  ];

  return (
    <div style={{ backgroundImage: `url(${Background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="profile-container1">
        <h2>Your Profile</h2>
        {user ? (
          <div className="profile-info">
            <img src={ProfilePic} alt="Profile" className="profile-image1" />
            
            {/* User Details Table */}
            <table className="profile-table">
              <tbody>
                <tr>
                  <th>First Name</th>
                  <td>{user.firstName}</td>
                </tr>
                <tr>
                  <th>Last Name</th>
                  <td>{user.lastName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <th>Password</th>
                  <td>********</td> {/* Masked password */}
                </tr>
                <tr>
                  <th>Aadhar Number</th>
                  <td>Not willing to disclose</td>
                </tr>
              </tbody>
            </table>

            <h3>Ride History</h3>
            {/* Ride History Table */}
            <table className="ride-history-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>From</th>
                  <th>To</th>
                </tr>
              </thead>
              <tbody>
                {rideHistory.map(ride => (
                  <tr key={ride.id}>
                    <td>{ride.date}</td>
                    <td>{ride.from}</td>
                    <td>{ride.to}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>Please log in to view your profile.</p>
        )}
      </div>
    </div>
  );
};

export default Profile;

// Profile.js
// import React from 'react';
// import { useAuth } from '../context/AuthContext';
// import './Profile.css';

// const Profile = () => {
//   const { user } = useAuth();

//   return (
//     <div className="profile-container">
//       <h2>Your Profile</h2>
//       {user ? (
//         <table className="profile-table">
//           <tbody>
//             <tr>
//               <th>First Name:</th>
//               <td>{user.firstName}</td>
//             </tr>
//             <tr>
//               <th>Last Name:</th>
//               <td>{user.lastName}</td>
//             </tr>
//             <tr>
//               <th>Email:</th>
//               <td>{user.email}</td>
//             </tr>
//             <tr>
//               <th>Aadhar Number:</th>
//               <td>{user.aadharNumber}</td>
//             </tr>
//             <tr>
//               <th>Phone Number:</th>
//               <td>{user.phoneNumber}</td>
//             </tr>
//             {user.isDriver && (
//               <>
//                 <tr>
//                   <th>Driving Licence:</th>
//                   <td>{user.drivingLicenceNumber}</td>
//                 </tr>
//                 <tr>
//                   <th>Vehicle Number:</th>
//                   <td>{user.vehicleNumber}</td>
//                 </tr>
//               </>
//             )}
//           </tbody>
//         </table>
//       ) : (
//         <p>Please log in to view your profile</p>
//       )}
//     </div>
//   );
// };

// export default Profile;
