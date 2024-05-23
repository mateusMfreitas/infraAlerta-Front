import React from 'react';
import { useNavigate } from 'react-router-dom';

export function withAuth(Component) {
    const navigate = useNavigate();

  return function ProtectedRoute(props) {
    const userString = sessionStorage.getItem('user');
    if (!userString) {
      navigate('/login');
    }

    return <Component {...props} />;
  }
}