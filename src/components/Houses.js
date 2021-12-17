import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Houses = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') === null) { navigate('/login'); }
  }, []);

  return (
    <h1>Add house</h1>
  );
};

export default Houses;
