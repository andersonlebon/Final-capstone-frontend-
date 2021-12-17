import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TelegramIcon from '@mui/icons-material/Telegram';
import logo from './logo.png';
import style from './navbar.module.scss';

const Navbar = ({ logo }) => (
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
    </ul>
    <footer className={style.footer}>
      <div className={style.social_icons}>
        <div className={style.icon_div}>
          <a
            href="https://facebook.com"
            aria-label="facebook"
          >
            <FacebookRoundedIcon color="action" sx={{ fontSize: 30 }} />
          </a>
        </div>
        <div className={style.icon_div}>
          <a
            href="https://twitter.com"
            aria-label="twitter"
          >
            <TwitterIcon color="action" sx={{ fontSize: 30 }} />
          </a>
        </div>
        <div className={style.icon_div}>
          <a
            href="https://instagram.com"
            aria-label="instagram"
          >
            <InstagramIcon color="action" sx={{ fontSize: 30 }} />
          </a>
        </div>
        <div className={style.icon_div}>
          <a
            href="https://pinterest.com"
            aria-label="instagram"
          >
            <PinterestIcon color="action" sx={{ fontSize: 30 }} />
          </a>
        </div>
        <div className={style.icon_div}>
          <a
            href="https://telegram.com"
            aria-label="instagram"
          >
            <TelegramIcon color="action" sx={{ fontSize: 30 }} />
          </a>
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

Navbar.defaultProps = {
  logo,
};

Navbar.propTypes = {
  logo: PropTypes.string,
};

export default Navbar;
