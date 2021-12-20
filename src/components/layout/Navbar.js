import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@material-ui/core/IconButton';
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
        <IconButton
          className={style.icon_btn}
          aria-label="facebook.com"
          onClick={() => window.open('https://facebook.com', '_blank')}
        >
          <FacebookRoundedIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          className={style.icon_btn}
          aria-label="twitter.com"
          onClick={() => window.open('https://twitter.com', '_blank')}
        >
          <TwitterIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          className={style.icon_btn}
          aria-label="instagram.com"
          onClick={() => window.open('https://instagram.com', '_blank')}
        >
          <InstagramIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          className={style.icon_btn}
          aria-label="pinterest.com"
          onClick={() => window.open('https://pinterest.com', '_blank')}
        >
          <PinterestIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
        <IconButton
          className={style.icon_btn}
          aria-label="telegram.com"
          onClick={() => window.open('https://telegram.com', '_blank')}
        >
          <TelegramIcon color="action" sx={{ fontSize: 30 }} />
        </IconButton>
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
