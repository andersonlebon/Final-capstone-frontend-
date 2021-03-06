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
    <div className="authenticate">

      <h1>
        Welcome to
        <span className="company"> BookingHouse </span>
      </h1>
      <p>
        Find the best houses from around the world.
        BookingHouse makes it quick and easy to book just the right house for you.
      </p>
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="submit" value="LOG IN" className="btn" />
        <span className="navigate">
          Don&rsquo;t have an account?
          <Link to="/signup" className="link"> SignUp </Link>
        </span>
      </form>

    </div>
  );
};

export default Login;
