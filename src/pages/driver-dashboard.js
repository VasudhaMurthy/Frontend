import React from 'react';
import Header from '../components/Driver-Dashboard/Header';
import RideManagement from '../components/Driver-Dashboard/RideManagement';
import Carpooling from '../components/Driver-Dashboard/Carpooling';
import Rewards from '../components/Driver-Dashboard/Rewards';
import './driver-dashboard.css';

const DriverDashboard = () => {
  return (
    <div className="driver-dashboard-container">
      <Header />
      <div className="main-content">
        <div className="section-container">
          <RideManagement />
        </div>
        <div className="section-container">
          <Carpooling />
        </div>
        <div className="section-container">
          <Rewards />
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;
