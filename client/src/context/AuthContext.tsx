import React, { createContext, useContext, useEffect, useState } from 'react';

type User = { id: string; name: string; email: string } | null;

type AuthContextType = {
  user: User;
  token: string | null;
  login: (u: User, t: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const u = localStorage.getItem('cvai_user');
    const t = localStorage.getItem('cvai_token');
    if (u && t) {
      setUser(JSON.parse(u));
      setToken(t);
    }
  }, []);

  const login = (u: User, t: string) => {
    setUser(u);
    setToken(t);
    localStorage.setItem('cvai_user', JSON.stringify(u));
    localStorage.setItem('cvai_token', t);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('cvai_user');
    localStorage.removeItem('cvai_token');
  };

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
