import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../store/reducers/users';

const SignUp = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user != null) { navigate('/'); }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <span>Username</span>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="submit" value="Signup" />
      </form>
      <Link to="/login"> Login </Link>
    </div>
  );
};

export default SignUp;
