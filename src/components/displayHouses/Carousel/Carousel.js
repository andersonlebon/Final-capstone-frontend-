/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import HouseInfos from '../HouseInfos';
import NextIcon from './NextIcon';
import PrevIcon from './PrevIcon';
import style from './Carousel.module.scss';

const Carousel = ({ houses }) => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 500,
    dots: true,
    nextIcon: <NextIcon />,
    prevIcon: <PrevIcon />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className={style.carousel_container}>
      {houses.map((house) => (
        <>
          <Link
            key={`${house.id}`}
            to={{
              pathname: `/showHouse/${house.title}`,
            }}
            data={house}
          >
            <HouseInfos key={house.title} house={house} />
          </Link>
        </>
      ))}
    </Slider>
  );
};

export default Carousel;

Carousel.propTypes = {
  houses: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      house_description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
