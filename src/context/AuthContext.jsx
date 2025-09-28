import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  const login = (username, role) => {
    setUser({ username, role })
    navigate("/chat")
  }
  const logout = () => {
    setUser(null)
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user , login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
