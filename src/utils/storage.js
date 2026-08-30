/**
 * Namespaced local storage wrapper for Cohen International School (cis:v1:*)
 */
const NAMESPACE = 'cis:v1:';

export const storage = {
  getItem(key, defaultValue = null) {
    try {
      const item = localStorage.getItem(`${NAMESPACE}${key}`);
      if (item === null) {
        // Fallback check for unnamespaced legacy keys during migration phase
        const legacyItem = localStorage.getItem(key);
        if (legacyItem !== null) {
          try {
            return JSON.parse(legacyItem);
          } catch {
            return legacyItem;
          }
        }
        return defaultValue;
      }
      return JSON.parse(item);
    } catch (e) {
      console.error(`Error reading key "${key}" from storage:`, e);
      return defaultValue;
    }
  },

  setItem(key, value) {
    try {
      localStorage.setItem(`${NAMESPACE}${key}`, JSON.stringify(value));
    } catch (e) {
      console.error(`Error writing key "${key}" to storage:`, e);
    }
  },

  removeItem(key) {
    try {
      localStorage.removeItem(`${NAMESPACE}${key}`);
      localStorage.removeItem(key); // clear legacy key if present
    } catch (e) {
      console.error(`Error removing key "${key}" from storage:`, e);
    }
  },

  clear() {
    try {
      Object.keys(localStorage).forEach((k) => {
        if (k.startsWith(NAMESPACE) || k.startsWith('cohen_') || k === 'token' || k === 'user') {
          localStorage.removeItem(k);
        }
      });
    } catch (e) {
      console.error('Error clearing storage:', e);
    }
  }
};
