import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

const Navbar = ({ logo }) => (
  <nav className={style.navbar}>
    <h1 className={style.head}>
      <img src={logo} alt="logo" width={150} height={100} />
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
        <span id="date" />
        House Booking all rights reserved
      </p>
    </footer>
  </nav>
);

Navbar.defaultProps = {
  logo,
};

Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
