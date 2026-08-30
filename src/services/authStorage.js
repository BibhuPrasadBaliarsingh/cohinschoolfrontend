import { storage } from '../utils/storage';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

/**
 * Auth storage abstraction layer.
 * Prepares the client architecture for future HttpOnly cookie support
 * while currently maintaining namespaced local storage.
 */
export const authStorage = {
  getToken() {
    return storage.getItem(TOKEN_KEY, null);
  },

  setToken(token) {
    if (token) {
      storage.setItem(TOKEN_KEY, token);
    } else {
      storage.removeItem(TOKEN_KEY);
    }
  },

  getUser() {
    return storage.getItem(USER_KEY, null);
  },

  setUser(user) {
    if (user) {
      storage.setItem(USER_KEY, user);
    } else {
      storage.removeItem(USER_KEY);
    }
  },

  clearAuth() {
    storage.removeItem(TOKEN_KEY);
    storage.removeItem(USER_KEY);
    // Remove legacy unnamespaced keys
    try {
      localStorage.removeItem('cohen_token');
      localStorage.removeItem('cohen_user');
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch {
      // Ignore in non-browser env
    }
  }
};
