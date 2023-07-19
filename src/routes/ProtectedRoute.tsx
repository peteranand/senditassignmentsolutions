import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {ROUTES} from '../constants/routes.constants';
import {TEMPIsAuthenticated} from '../utils/auth';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({children}: ProtectedRouteProps): JSX.Element {
  const location = useLocation();
  if (TEMPIsAuthenticated()) return <>{children}</>;
  return <Navigate to={ROUTES.LOGIN} state={{from: location}} replace />;
}
