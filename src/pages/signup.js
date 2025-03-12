// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';
// import './signup.css';

// const Signup = () => {
//   const { signup } = useAuth();
//   const navigate = useNavigate();
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });
//   const [error, setError] = useState(null);

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     if (credentials.password !== credentials.confirmPassword) {
//       setError('Passwords do not match.');
//       return;
//     }

//     try {
//       await signup(credentials); // Call the signup function from AuthContext
//       navigate('/login'); // Navigate to login after successful signup
//     } catch (error) {
//       setError('Signup failed. Please try again.');
//     }
//   };

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="signup-container">
//       <form onSubmit={handleSignup} className="signup-form">
//         <h2>Sign up</h2>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={credentials.email}
//             onChange={handleChange}
//             placeholder="Enter your email"
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={credentials.password}
//             onChange={handleChange}
//             placeholder="Enter your password"
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             name="confirmPassword"
//             value={credentials.confirmPassword}
//             onChange={handleChange}
//             placeholder="Confirm your password"
//           />
//         </div>
//         <button type="submit" className="signup-button">
//           Sign up
//         </button>
//         {error && <div className="error-message">{error}</div>}
//         <div className="login-link">
//           Already have an account? <a href="/login">Login here</a>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Signup;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Background from "../Assets/profile-background.jpg";
import './signup.css';

const Signup = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    aadharNumber: '',
    phoneNumber: '',
    isDriver: false,
    drivingLicenceNumber: '',
    vehicleNumber: ''
  });
  const [error, setError] = useState(null);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else {
      try {
        await signup(formData);
        navigate('/login', { replace: true });
      } catch (error) {
        setError('Signup failed. Please check your details.');
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div style={{ backgroundImage: `url(${Background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="signup-container">
      <form onSubmit={handleSignup} className="signup-form">
        <h2>Sign Up</h2>
        {step === 1 && (
          <div>
            <div className="form-group">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                required
              />
            </div>
            <button type="submit" className="signup-button">
              Next
            </button>
          </div>
        )}
        {step === 2 && (
          <div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
                required
              />
            </div>
            <div className="form-group">
              <label>Aadhar Number:</label>
              <input
                type="text"
                name="aadharNumber"
                value={formData.aadharNumber}
                onChange={handleChange}
                placeholder="Enter your Aadhar number"
                required
              />
            </div>
            <div className="form-group checkbox-label">
            <input 
                type="checkbox" 
                name="isDriver" 
                checked={formData.isDriver} 
                onChange={handleChange} 
                id="isDriverCheckbox"
            />
            <label htmlFor="isDriverCheckbox">I want to register as a driver</label>
            </div>
            {formData.isDriver && (
              <div>
                <div className="form-group">
                  <label>Driving Licence Number:</label>
                  <input
                    type="text"
                    name="drivingLicenceNumber"
                    value={formData.drivingLicenceNumber}
                    onChange={handleChange}
                    placeholder="Enter your driving licence number"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Vehicle Number:</label>
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    placeholder="Enter your vehicle number"
                    required
                  />
                </div>
              </div>
            )}
            <button type="button" onClick={() => setStep(1)} className="back-button">
              Back
            </button>
            <button type="submit" className="signup-button">
              Complete Registration
            </button>
          </div>
        )}
        {error && <div className="error-message">{error}</div>}
        <div className="login-link">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Signup;
