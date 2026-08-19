import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const API_BASE_URL = '/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('cohen_user') || localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('cohen_token') || localStorage.getItem('token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Synchronize axios default authorization header with token
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }, [token]);

  // Check initial authentication state on mount
  useEffect(() => {
    async function verifySession() {
      const storedToken = localStorage.getItem('cohen_token') || localStorage.getItem('token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        const response = await axios.get(`${API_BASE_URL}/auth/me`);

        if (response.data?.success && (response.data.data || response.data.user)) {
          const userData = response.data.data || response.data.user;
          setUser(userData);
          localStorage.setItem('cohen_user', JSON.stringify(userData));
        } else {
          setUser(null);
          setToken(null);
          localStorage.clear();
        }
      } catch (err) {
        // Backend verification failed or unauthorized - reset user state cleanly
        setUser(null);
        setToken(null);
        localStorage.removeItem('cohen_token');
        localStorage.removeItem('token');
        localStorage.removeItem('cohen_user');
        delete axios.defaults.headers.common['Authorization'];
      } finally {
        setLoading(false);
      }
    }

    verifySession();
  }, []);

  // Login Handler
  async function login(email, password) {
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });

      if (!response.data || !response.data.success) {
        throw new Error(response.data?.message || 'Authentication failed');
      }

      const userToken = response.data.token;
      const userData = response.data.user;

      setToken(userToken);
      setUser(userData);
      localStorage.setItem('cohen_token', userToken);
      localStorage.setItem('token', userToken);
      localStorage.setItem('cohen_user', JSON.stringify(userData));

      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;

      return userData;
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Authentication failed';
      setError(errMsg);
      throw new Error(errMsg);
    } finally {
      setLoading(false);
    }
  }

  // Register Handler
  async function register(userData) {
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/auth/register`, userData);

      if (!response.data || !response.data.success) {
        throw new Error(response.data?.message || 'Registration failed');
      }

      const userToken = response.data.token;
      const newUserData = response.data.user || response.data.data;

      setToken(userToken);
      setUser(newUserData);
      localStorage.setItem('cohen_token', userToken);
      localStorage.setItem('token', userToken);
      localStorage.setItem('cohen_user', JSON.stringify(newUserData));

      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;

      return newUserData;
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Registration failed';
      setError(errMsg);
      throw new Error(errMsg);
    } finally {
      setLoading(false);
    }
  }

  // Logout Handler
  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem('cohen_token');
    localStorage.removeItem('token');
    localStorage.removeItem('cohen_user');
    delete axios.defaults.headers.common['Authorization'];
  }

  // Check Role Access Helper
  function hasRole(allowedRoles) {
    if (!user) return false;
    if (!allowedRoles || allowedRoles.length === 0) return true;
    const userRoleLower = (user.role || '').toLowerCase();
    return allowedRoles.some(r => r.toLowerCase() === userRoleLower || r === user.role);
  }

  const value = {
    user,
    token,
    loading,
    error,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    hasRole
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

