import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../components/context/Auth';

const ProtectedRoute = ({children, role}) => {
  const { user } = useAuthContext();
  
  if (!user) {
    return <Navigate to="/" />;
  }
  if (role && !role.includes(user.role)) {
    return <Navigate to="/404" />;
  }

  return children;
};

export default ProtectedRoute;