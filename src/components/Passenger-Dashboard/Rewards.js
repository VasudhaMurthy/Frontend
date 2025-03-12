// import React from 'react';
// import { List, Modal, Button } from 'antd';

// const Rewards = () => {
//   const [showRedeem, setShowRedeem] = React.useState(false);
//   const redeemOptions = [
//     { points: 500, reward: '₹100 Fuel Credit' },
//     { points: 1000, reward: 'Free Car Wash' },
//     { points: 2000, reward: 'Premium Service Discount' }
//   ];

//   return (
//     <div className="rewards">
//       <h2>Reward Redemption</h2>
//       <Button type="primary" onClick={() => setShowRedeem(true)}>
//         Redeem Points
//       </Button>
//       <Modal
//         title="Redeem Your Rewards"
//         visible={showRedeem}
//         onCancel={() => setShowRedeem(false)}
//         footer={null}
//       >
//         <List
//           dataSource={redeemOptions}
//           renderItem={item => (
//             <List.Item
//               actions={[
//                 <Button 
//                   disabled={1500 < item.points} // Example condition
//                   onClick={() => alert(`Claimed: ${item.reward}`)}
//                 >
//                   Redeem
//                 </Button>
//               ]}
//             >
//               <List.Item.Meta
//                 title={item.reward}
//                 description={`${item.points} points required`}
//               />
//             </List.Item>
//           )}
//         />
//       </Modal>
//     </div>
//   );
// };

// export default Rewards;
import React from 'react';
import { List, Modal, Button } from 'antd';
import './Rewards.css';

const Rewards = () => {
  const [showRedeem, setShowRedeem] = React.useState(false);
  const redeemOptions = [
    { points: 500, reward: '₹100 Fuel Credit' },
    { points: 1000, reward: 'Free Car Wash' },
    { points: 2000, reward: 'Premium Service Discount' }
  ];

  return (
    <div className="rewards">
      <h2>Reward Redemption</h2>
      <Button type="primary" onClick={() => setShowRedeem(true)}>
        Redeem Points
      </Button>
      <Modal
        title="Redeem Your Rewards"
        visible={showRedeem}
        onCancel={() => setShowRedeem(false)}
        footer={null}
      >
        <List
          dataSource={redeemOptions}
          renderItem={item => (
            <List.Item
              actions={[
                <Button 
                  disabled={2500 < item.points} // Example condition
                  onClick={() => alert(`Claimed: ${item.reward}`)}
                >
                  Redeem
                </Button>
              ]}
            >
              <List.Item.Meta
                title={item.reward}
                description={`${item.points} points required`}
              />
            </List.Item>
          )}
        />
      </Modal>
    </div>
  );
};

export default Rewards;
