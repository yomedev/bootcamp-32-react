import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'


export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(true);
  const [username, setUsername] = useState('');

  const navigate = useNavigate()

  const login = (name, password) => {
    if (password === '123') {
      setIsAuth(true);
      setUsername(name);
      navigate('/posts', { replace: true })
      return;
    }

    alert('Invalid password');
  };
  const logout = () => {
    setIsAuth(false);
    setUsername('');
  };
  return <AuthContext.Provider value={{ isAuth, username, login, logout }}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  return useContext(AuthContext);
};