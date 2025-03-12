import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      if (credentials.email === 'abc@example.com' && credentials.password === 'abc') {
        setUser({ email: 'abc@example.com' });
        localStorage.setItem("user", JSON.stringify({ email: 'abc@example.com' }));
        return { email: 'abc@example.com' };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const signup = async (credentials) => {
    // For now, just return a success message
    console.log('Signup successful:', credentials);
    return { message: 'Signup successful' };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  if (!children) {
    console.error('AuthProvider did not receive children props.');
    return null; // or throw an error
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, signup, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

// AuthContext.js
// import React, { createContext, useContext, useState } from 'react';

// const AuthContext = createContext();

// export function AuthProvider({ children }) {
//   const [user, setUser] = useState(null);

//   const signup = (formData) => {
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const newUser = { ...formData };
//     users.push(newUser);
//     localStorage.setItem('users', JSON.stringify(users));
//     setUser(newUser);
//   };

//   const login = (email, password) => {
//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const foundUser = users.find(u => u.email === email && u.password === password);
//     if (foundUser) {
//       setUser(foundUser);
//       return true;
//     }
//     return false;
//   };

//   const logout = () => {
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, signup, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export function useAuth() {
//   return useContext(AuthContext);

