import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '@/modules/auth/ui/AuthProvider';

const AuthGuard = ({ children }) => {
  const { user, loading } = useAuthContext();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-800"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" replace />;
  }

  return children;
};

export default AuthGuard;