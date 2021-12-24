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
    <div className="authenticate">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Signup</h2>
        <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
        <input type="submit" value="SIGNUP" className="btn" />
        <span className="navigate">
          Do you have account?
          <Link to="/login" className="link"> Login </Link>
        </span>
      </form>
    </div>
  );
};

export default SignUp;
