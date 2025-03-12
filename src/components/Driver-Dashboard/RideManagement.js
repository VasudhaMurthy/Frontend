import React, { useState, useEffect } from 'react';
import { List, Avatar, Button } from 'antd';
import { TeamOutlined } from '@ant-design/icons';


const RideManagement = () => {
  const [rides, setRides] = useState([]);
  const [availableRides, setAvailableRides] = useState([]);

  useEffect(() => {
    setAvailableRides([
      {
        id: 1,
        from: 'Central Business District',
        to: 'Tech Park Zone',
        distance: 12.5,
        passengers: 2,
        rewardPoints: 450,
        departure: '08:30 AM'
      },
      {
        id: 2,
        from: 'Residential North',
        to: 'Downtown',
        distance: 8.2,
        passengers: 1,
        rewardPoints: 300,
        departure: '09:15 AM'
      }
    ]);
  }, []);

  const startRide = (rideId) => {
    const selectedRide = availableRides.find(r => r.id === rideId);
    setRides([...rides, { ...selectedRide, status: 'ongoing' }]);
    setAvailableRides(availableRides.filter(r => r.id !== rideId));
  };

  const completeRide = (rideId) => {
    const completedRide = rides.find(r => r.id === rideId);
    // Update rewards logic here
    setRides(rides.filter(r => r.id !== rideId));
  };

  return (
    <div className="ride-management">
      <h2><TeamOutlined /> Available Pool Rides</h2>
      <List
        itemLayout="horizontal"
        dataSource={availableRides}
        renderItem={ride => (
          <List.Item
            actions={[
              <Button type="primary" onClick={() => startRide(ride.id)}>
                Accept Ride ({ride.rewardPoints} pts)
              </Button>
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar icon={<TeamOutlined />} />}
              title={`${ride.from} → ${ride.to}`}
              description={`${ride.distance} km • ${ride.passengers} passengers • Departs ${ride.departure}`}
            />
          </List.Item>
        )}
      />
      <h2>Your Active Rides</h2>
      {rides.map(ride => (
        <div key={ride.id} className="ride-card">
          <h3>{ride.from} → {ride.to}</h3>
          <p>Passengers: {ride.passengers}</p>
          <p>Estimated Reward: {ride.rewardPoints} points</p>
          <Button type="primary" onClick={() => completeRide(ride.id)}>
            Complete Ride
          </Button>
        </div>
      ))}
    </div>
  );
};

export default RideManagement;
