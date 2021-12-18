import React from 'react';
import PropTypes from 'prop-types';
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