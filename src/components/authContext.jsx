import { createContext } from 'react';

const AuthContext = createContext({
  token: '',
  login: () => {},
  logout: () => {},
});

export default AuthContext;