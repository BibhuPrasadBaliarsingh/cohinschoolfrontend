import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import axios from 'axios';
import { authStorage } from '../services/authStorage';

export const AuthContext = createContext(null);
export { default as useAuth } from '../hooks/useAuth';

const API_BASE_URL = '/api';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => authStorage.getUser());
  const [token, setToken] = useState(() => authStorage.getToken());
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

  // Check initial authentication state on mount with abort signal
  useEffect(() => {
    let isMounted = true;

    async function verifySession() {
      const storedToken = authStorage.getToken();
      if (!storedToken) {
        if (isMounted) setLoading(false);
        return;
      }

      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${storedToken}`;
        const response = await axios.get(`${API_BASE_URL}/auth/me`);

        if (isMounted) {
          if (response.data?.success && (response.data.data || response.data.user)) {
            const userData = response.data.data || response.data.user;
            setUser(userData);
            authStorage.setUser(userData);
          } else {
            setUser(null);
            setToken(null);
            authStorage.clearAuth();
          }
        }
      } catch (_err) {
        if (isMounted) {
          setUser(null);
          setToken(null);
          authStorage.clearAuth();
          delete axios.defaults.headers.common['Authorization'];
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    verifySession();

    return () => {
      isMounted = false;
    };
  }, []);

  // Login Handler
  const login = useCallback(async (email, password) => {
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
      authStorage.setToken(userToken);
      authStorage.setUser(userData);

      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;

      return userData;
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Authentication failed';
      setError(errMsg);
      throw new Error(errMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Register Handler
  const register = useCallback(async (userData) => {
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
      authStorage.setToken(userToken);
      authStorage.setUser(newUserData);

      axios.defaults.headers.common['Authorization'] = `Bearer ${userToken}`;

      return newUserData;
    } catch (err) {
      const errMsg = err.response?.data?.message || err.message || 'Registration failed';
      setError(errMsg);
      throw new Error(errMsg);
    } finally {
      setLoading(false);
    }
  }, []);

  // Logout Handler
  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    authStorage.clearAuth();
    delete axios.defaults.headers.common['Authorization'];
  }, []);

  // Check Role Access Helper
  const hasRole = useCallback(
    (allowedRoles) => {
      if (!user) return false;
      if (!allowedRoles || allowedRoles.length === 0) return true;
      const userRoleLower = (user.role || '').toLowerCase();
      return allowedRoles.some((r) => r.toLowerCase() === userRoleLower || r === user.role);
    },
    [user]
  );

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      error,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      hasRole
    }),
    [user, token, loading, error, login, register, logout, hasRole]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
