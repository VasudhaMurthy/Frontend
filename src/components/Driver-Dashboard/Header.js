import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { Tag, Button } from 'antd';
import { GiftOutlined } from '@ant-design/icons';
import './DHeader.css';


const Header = () => {
  const { user } = useAuth();
  const [rewards] = React.useState(1500);

  return (
    <div className="header">
      <h1>Welcome, {user?.name || 'Driver'}!</h1>
      <div className="rewards-panel">
        <Tag icon={<GiftOutlined />} color="gold">
          Reward Points: {rewards}
        </Tag>
        <Button type="primary">Redeem Points</Button>
      </div>
    </div>
  );
};

export default Header;
