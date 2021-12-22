/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import style from './navbar.module.scss';
import SocialIcons from './socialIcons';
import {
  Bars, NavLink, NavMenu, MobileIcon, UserIcon, UserCircle,
} from './NavbarElelments';

const Navbar = ({ logo, toggle }) => (
  <nav className={style.navbar}>
    <div className={style.nav_head}>
      <h1 className={style.head}>
        <Link to="/" className={style.logo_div}>
          <img src={logo} alt="logo" width={100} height={100} />
        </Link>
        <UserIcon>
          <UserCircle />
          <span className={style.cur_user}>user</span>
        </UserIcon>
        <MobileIcon onClick={toggle}>
          <Bars />
        </MobileIcon>
      </h1>
      <div className={style.nav_body}>
        <NavMenu className={style.navlist}>
          <NavLink className={style.items} to="/" activestyle>
            Houses
          </NavLink>

          <NavLink className={style.items} to="/myreservations" activestyle>
            Reservations
          </NavLink>

          <NavLink className={style.items} to="/addhouse" activestyle>
            Add House
          </NavLink>

          <NavLink className={style.items} to="/removehouse" activestyle>
            Remove House
          </NavLink>

          <NavLink className={style.items} to="/reserve" activestyle>
            Reserve
          </NavLink>
        </NavMenu>
      </div>
    </div>
    <footer className={style.footer}>
      <SocialIcons />
      <p>
        &copy;
        {' '}
        <span>{new Date().getFullYear()}</span>
        {' '}
        all rights reserved
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
