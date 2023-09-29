import React, { useState } from 'react';
import AuthContext from './authContext.jsx';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken('');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
