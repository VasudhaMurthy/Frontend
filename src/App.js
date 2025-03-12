import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/login';
import Signup from './pages/signup';
import RoleSelection from './pages/role-selection';
import DriverDashboard from './pages/driver-dashboard';
import PassengerDashboard from './pages/passenger-dashboard';
import Home from './components/Landing/Home';
import About from './components/Landing/about';
import Work from './components/Landing/work';
import Us from './components/Landing/Us';
import Contact from './components/Landing/contact';
import Footer from './components/Landing/footer';
import Profile from './pages/Profile'; // Import Profile component 
import AvailableDrivers from './pages/AvailableDrivers';
import RideDetails from './pages/RideDetails';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import Rating from './pages/Rating';
import { AvailableDriversProvider } from './components/AvailableDriversContext';         
import PostRide from './pages/PostRide';
import WaitingRequests from './pages/WaitingRequests';
import ActiveRide from './pages/ActiveRide';                                               

function App() {
  return (
    <AuthProvider>
      <Router>
      <AvailableDriversProvider>
        <Routes>
          <Route path="/" element={ 
            <div className="Landing">
              <Home />
              <About />
              <Work />
              <Us />
              <Contact />
              <Footer />
            </div>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/role-selection" element={<RoleSelection />} />
          <Route path="/dashboard/driver" element={<DriverDashboard />} />
          <Route path="/dashboard/passenger" element={<PassengerDashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/available-drivers" element={<AvailableDrivers />} />
          <Route path="/ride-details" element={<RideDetails />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/PaymentSuccess" element={<PaymentSuccess />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/driver/post-ride" element={<PostRide />} />
          <Route path="/driver/waiting-requests" element={<WaitingRequests />} />
          <Route path="/driver/active-ride" element={<ActiveRide />} />
        </Routes>
        </AvailableDriversProvider>
      </Router>
    </AuthProvider>
  );
}


export default App;
