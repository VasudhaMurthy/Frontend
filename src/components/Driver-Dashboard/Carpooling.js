import React, { useState } from 'react';
import { List, Avatar, Button } from 'antd';


const Carpooling = () => {
  const [isAvailable, setIsAvailable] = useState(false);
  const [passengers, setPassengers] = useState([]);

  const findPassengers = () => {
    // Simulate passenger matching
    setPassengers([
      { id: 1, name: 'Sarah Johnson', rating: 4.9, pickup: '2nd Ave' },
      { id: 2, name: 'Mike Chen', rating: 4.8, pickup: 'Main Station' }
    ]);
    setIsAvailable(true);
  };

  return (
    <div className="carpooling">
      <h2>Carpool Matching</h2>
      <Button 
        type={isAvailable ? 'default' : 'primary'} 
        onClick={findPassengers}
      >
        {isAvailable ? 'Stop Matching' : 'Find Passengers'}
      </Button>
      {isAvailable && passengers.length > 0 && (
        <List
          dataSource={passengers}
          renderItem={passenger => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar>{passenger.name[0]}</Avatar>}
                title={passenger.name}
                description={`Pickup: ${passenger.pickup} • Rating: ${passenger.rating}/5`}
              />
              <Button>Connect</Button>
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

export default Carpooling;
