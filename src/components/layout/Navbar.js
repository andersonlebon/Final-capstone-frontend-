/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from './logo.png';
import style from './navbar.module.scss';
import SocialIcons from './socialIcons';
import {
  Bars, NavLink, NavMenu, MobileIcon,
} from './NavbarElelments';

const Navbar = ({ logo, toggle }) => (
  <>
    <nav className={style.navbar}>
      <h1 className={style.head}>
        <Link to="/" className={style.logo_div}>
          <img src={logo} alt="logo" width={100} height={100} />
        </Link>
        <MobileIcon onClick={toggle}>
          <Bars />
        </MobileIcon>
      </h1>
      <div className={style.nav_body}>
        <NavMenu className={style.navlist}>

          <NavLink className={style.items} to="/" activeStyle>
            Houses
          </NavLink>

          <NavLink className={style.items} to="/myreservations" activeStyle>
            My Reservations
          </NavLink>

          <NavLink className={style.items} to="/addhouse" activeStyle>
            Add House
          </NavLink>

          <NavLink className={style.items} to="/removehouse" activeStyle>
            Remove House
          </NavLink>

          <NavLink className={style.items} to="/reserve" activeStyle>
            Reserve
          </NavLink>

        </NavMenu>
        <footer className={style.footer}>
          <SocialIcons />
          <p>
            &copy;
            {' '}
            <span>{new Date().getFullYear()}</span>
            {' '}
            House Booking all
            rights reserved
          </p>
        </footer>
      </div>
    </nav>
  </>
);

Navbar.defaultProps = {
  logo,
};

Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
