import React from 'react';
import { useAuth } from '../contexts/FakeAuthContext';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  return <>{isAuthenticated ? children : <Navigate to={'/'} />}</>;
}
