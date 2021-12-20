import React from 'react';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import IconButton from '@material-ui/core/IconButton';
import TelegramIcon from '@mui/icons-material/Telegram';
import style from './navbar.module.scss';

const SocialIcons = () => (
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
);

export default SocialIcons;
