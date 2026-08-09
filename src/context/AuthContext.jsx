import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const API_BASE_URL = 'http://localhost:5000/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('cohen_user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('cohen_token') || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check initial authentication state on mount
  useEffect(() => {
    async function verifySession() {
      const storedToken = localStorage.getItem('cohen_token');
      if (!storedToken) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`${API_BASE_URL}/auth/me`, {
          headers: {
            Authorization: `Bearer ${storedToken}`
          }
        });

        const data = await response.json();
        if (data.success && data.user) {
          setUser(data.user);
          localStorage.setItem('cohen_user', JSON.stringify(data.user));
        } else {
          // Token expired or invalid
          logout();
        }
      } catch (err) {
        console.error('Session verification failed:', err);
        // Fallback to local storage user if offline
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
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Authentication failed');
      }

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('cohen_token', data.token);
      localStorage.setItem('cohen_user', JSON.stringify(data.user));

      return data.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Register Handler
  async function register(userData) {
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Registration failed');
      }

      setToken(data.token);
      setUser(data.user);
      localStorage.setItem('cohen_token', data.token);
      localStorage.setItem('cohen_user', JSON.stringify(data.user));

      return data.user;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  }

  // Logout Handler
  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem('cohen_token');
    localStorage.removeItem('cohen_user');
  }

  // Check Role Access Helper
  function hasRole(allowedRoles) {
    if (!user) return false;
    if (!allowedRoles || allowedRoles.length === 0) return true;
    return allowedRoles.includes(user.role);
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
