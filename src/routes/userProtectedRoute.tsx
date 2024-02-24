import { isAuthenticated } from 'utils/index';
import { Navigate } from 'react-router-dom';
import React from 'react';

const UserProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  if (isAuthenticated()) return children;
  else return <Navigate to="/login" />;
};

export default UserProtectedRoute;
