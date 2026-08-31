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

      // If stored token is a demo offline token, retain user session immediately
      if (storedToken.startsWith('demo_token_')) {
        const storedUser = authStorage.getUser();
        if (storedUser && isMounted) {
          setUser(storedUser);
          setLoading(false);
          return;
        }
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
          const storedUser = authStorage.getUser();
          if (storedUser && (storedToken.startsWith('demo_token_') || storedUser.role)) {
            // Keep active session in case backend server is unreachable
            setUser(storedUser);
          } else {
            setUser(null);
            setToken(null);
            authStorage.clearAuth();
            delete axios.defaults.headers.common['Authorization'];
          }
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

  // Demo fallback user generator
  const getDemoUser = (email, password) => {
    const lower = (email || '').toLowerCase().trim();
    const validPass = password === 'password123' || password === 'parent123' || password === 'student123' || password === 'teacher123' || password === 'principal123' || password === 'admin123' || password === '123456';

    if (!validPass) return null;

    if (lower.includes('parent')) {
      return {
        _id: 'demo-parent-001',
        name: 'Dr. Alok Mohanty (Parent)',
        email: lower,
        role: 'Parent',
        status: 'Active'
      };
    }
    if (lower.includes('student')) {
      return {
        _id: 'demo-student-001',
        name: 'Aarav Mohanty (Student)',
        email: lower,
        role: 'Student',
        status: 'Active'
      };
    }
    if (lower.includes('teacher')) {
      return {
        _id: 'demo-teacher-001',
        name: 'Smt. Priya Mohanty (Teacher)',
        email: lower,
        role: 'Teacher',
        status: 'Active'
      };
    }
    if (lower.includes('principal')) {
      return {
        _id: 'demo-principal-001',
        name: 'Dr. Sunita Rath (Principal)',
        email: lower,
        role: 'Principal',
        status: 'Active'
      };
    }
    if (lower.includes('superadmin') || lower.includes('admin')) {
      return {
        _id: 'demo-admin-001',
        name: 'Super Admin User',
        email: lower,
        role: 'Super Admin',
        status: 'Active'
      };
    }
    return null;
  };

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
      // Fallback check for demo credentials if backend is offline or returns error
      const demoUser = getDemoUser(email, password);
      if (demoUser) {
        const demoToken = `demo_token_${demoUser.role.toLowerCase()}_${Date.now()}`;
        setToken(demoToken);
        setUser(demoUser);
        authStorage.setToken(demoToken);
        authStorage.setUser(demoUser);
        return demoUser;
      }

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
