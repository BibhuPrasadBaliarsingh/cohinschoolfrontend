import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { Loader2 } from 'lucide-react';

export default function PrivateRoute({ children, allowedRoles }) {
  const { isAuthenticated, loading, hasRole } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex flex-col items-center justify-center text-white p-4">
        <Loader2 className="w-10 h-10 text-gold-400 animate-spin mb-4" />
        <p className="font-display text-lg text-white/80">Verifying Authorization Credentials...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (allowedRoles && !hasRole(allowedRoles)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return children;
}
