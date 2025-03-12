
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Background from "../Assets/profile-background.jpg";
import './login.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      navigate('/role-selection', { replace: true });
    } catch (error) {
      setError('Login failed. Please check your credentials.');
    }
  };
  

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };


  return (
    <div style={{ backgroundImage: `url(${Background})`, height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center' }}>
    <div className="login-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        {error && <div className="error-message">{error}</div>}
        <div className="signup-link">
          Don't have an account? <a href="/signup">Signup here</a>
        </div>
      </form>
    </div>
    </div>
  );
};

export default Login;
