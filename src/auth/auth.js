import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function withAuth(Component) {
  return function ProtectedRoute(props) {
    const navigate = useNavigate();
    const userString = sessionStorage.getItem('user');

    useEffect(() => {
      if (!userString) {
        navigate('/login');
      }
    }, [navigate, userString]);

    return <Component {...props} />;
  }
}