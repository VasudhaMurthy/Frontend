// import React from 'react';
// import { useAuth } from '../../context/AuthContext';
// import { Tag, Button } from 'antd';
// import { GiftOutlined } from '@ant-design/icons';
// import './PHeader.css';
// import logo from '../../Assets/Logo.svg'; // Import your logo
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import Profile from '../../Assets/Profile.jpeg'; // Import default profile picture

// const Header = ({ rewardsEnabled }) => {
//   const { user } = useAuth();
//   const [rewards] = React.useState(1500);
//   const navigate = useNavigate(); // Initialize useNavigate

//   const goToProfile = () => {
//     navigate('/profile'); // Replace '/profile' with your actual profile route
//   };

//   return (
//     <div className="header">
//       <div className="logo-container">
//         <img src={logo} alt="GoTogether Logo" className="logo" />
//       </div>
//       <h1>Welcome, {user?.name || 'UserName'}!</h1>
//       <div className="profile-container" onClick={goToProfile} style={{ cursor: 'pointer' }}> 
//         <img
//           src={user?.profileImageUrl || Profile} // Use default if user doesn't have one
//           alt="Profile"
//           className="profile-image"
//         />
//       </div>
//       <div className="rewards-panel">
//         {rewardsEnabled && (
//           <Tag icon={<GiftOutlined />} color="gold">
//             Reward Points: {rewards}
//           </Tag>
//         )}
//         {rewardsEnabled && (
//           <Button type="primary">Redeem Points</Button>
          
//         )}
//       </div>
//     </div>
//   );
// };

// export default Header;



import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Tag, Button } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import './PHeader.css';
import logo from '../../Assets/Logo.svg'; // Import your logo
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Profile from '../../Assets/Profile.jpeg'; // Import default profile picture

const Header = ({ rewardsEnabled }) => {
  const { user } = useAuth();
  const [rewards] = React.useState(1500);
  const navigate = useNavigate(); // Initialize useNavigate

  const goToProfile = () => {
    navigate('/profile'); // Replace '/profile' with your actual profile route
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="GoTogether Logo" className="logo" />
      </div>
      <h1>Welcome, {user?.name || 'UserName'}!</h1>
      <div className="profile-container" onClick={goToProfile} style={{ cursor: 'pointer' }}> 
        <img
          src={user?.profileImageUrl || Profile} // Use default if user doesn't have one
          alt="Profile"
          className="profile-image"
        />
      </div>
      <div className="rewards-panel">
        {rewardsEnabled && (
          <Tag icon={<GiftOutlined />} color="gold">
            Reward Points: {rewards}
          </Tag>
        )}
        {rewardsEnabled && (
          <Button type="primary">Redeem Points</Button>
          
        )}
      </div>
    </div>
  );
};

export default Header;


