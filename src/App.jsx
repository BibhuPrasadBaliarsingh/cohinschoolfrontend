import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import router from './routes/router';

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <MotionConfig reducedMotion="user">
          <RouterProvider router={router} />
        </MotionConfig>
      </ThemeProvider>
    </AuthProvider>
  );
}
