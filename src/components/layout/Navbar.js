import React from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  Facebook,
  Twitter,
  Instagram,
  Pinterest,
  Telegram,
  Whatsapp,
} from 'react-bootstrap-icons';
import logo from './logo.png';
import style from './navbar.module.css';
import { logoutUser } from '../../store/reducers/users';

const Navbar = ({ logo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className={style.navbar}>
      <h1 className={style.head}>
        <img src={logo} alt="logo" width={100} height={100} />
      </h1>
      <ul className={style.navlist}>
        <li className={style.listitems}>
          <Link className={style.items} to="/">
            Houses
          </Link>
        </li>
        <li className={style.listitems}>
          <Link className={style.items} to="/myreservations">
            My Reservations
          </Link>
        </li>
        <li className={style.listitems}>
          <Link className={style.items} to="/addhouse">
            Add House
          </Link>
        </li>
        <li className={style.listitems}>
          <Link className={style.items} to="/removehouse">
            Remove House
          </Link>
        </li>
        <li className={style.listitems}>
          <Link className={style.items} to="/reserve">
            Reserve
          </Link>
        </li>
        <li className={style.listitems}>
          <button type="button" onClick={handleLogout}>
            Log Out
          </button>
        </li>
      </ul>
      <footer className={style.footer}>
        <div className={style.social_icons}>
          <div className={style.icon_div}>
            <Facebook className={style.icon} />
          </div>
          <div className={style.icon_div}>
            <Twitter className={style.icon} />
          </div>
          <div className={style.icon_div}>
            <Instagram className={style.icon} />
          </div>
          <div className={style.icon_div}>
            <Pinterest className={style.icon} />
          </div>
          <div className={style.icon_div}>
            <Telegram className={style.icon} />
          </div>
          <div className={style.icon_div}>
            <Whatsapp className={style.icon} />
          </div>
        </div>
        <p>
          &copy;
          {' '}
          <span>{new Date().getFullYear()}</span>
          {' '}
          House Booking all rights
          reserved
        </p>
      </footer>
    </nav>
  );
};

Navbar.defaultProps = {
  logo,
};

Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
