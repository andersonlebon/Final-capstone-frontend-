import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authenticateUser } from '../store/reducers/users';

const Signup = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(authenticateUser('Tester'));
  }, []);
  return (
    <div>
      <p>{ user }</p>
    </div>
  );
};

export default Signup;
