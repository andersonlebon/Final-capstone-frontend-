import React from 'react';
import PropTypes from 'prop-types';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import style from './HouseInfos.module.scss';

const HouseInfos = ({ house }) => (
  <article className={style.info_container}>
    <div className={style.info_img}>
      <img alt="house" src={house.image} />
    </div>

    <div className={style.title_div}>
      <h2 className={style.info_title}>{house.title}</h2>
    </div>

    <div className={style.divider} />

    <div className={style.description_div}>
      <h2 className={style.info_description}>{house.house_description}</h2>
    </div>

    <div className={style.info_icons}>
      <div className={style.icon_div}>
        <a href="https://facebook.com" aria-label="facebook">
          <FacebookRoundedIcon color="disabled" sx={{ fontSize: 40 }} />
        </a>
      </div>
      <div className={style.icon_div}>
        <a href="https://twitter.com" aria-label="twitter">
          <TwitterIcon color="disabled" sx={{ fontSize: 40 }} />
        </a>
      </div>
      <div className={style.icon_div}>
        <a href="https://instagram.com" aria-label="instagram">
          <InstagramIcon color="disabled" sx={{ fontSize: 40 }} />
        </a>
      </div>
    </div>
  </article>
);

export default HouseInfos;

HouseInfos.propTypes = {
  house: PropTypes.shape({
    title: PropTypes.string.isRequired,
    house_description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
