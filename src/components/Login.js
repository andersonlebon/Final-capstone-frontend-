import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { authenticateUser } from '../store/reducers/users';

const Login = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userReducer);

  useEffect(() => {
    if (user != null) { navigate('/'); }
  }, [user]);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authenticateUser(username));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <span>Username</span>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="submit" value="Log In" />
      </form>
      <Link to="/signup"> SignUp </Link>
    </div>
  );
};

export default Login;
