import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@material-ui/core/IconButton';
import HouseInfos from '../HouseInfos';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';
import style from './Carousel.module.scss';

const Carousel = ({ houses }) => {
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
        <div key={house.id}>
          <Link
            key={house.id}
            to={{
              pathname: `/showHouse/${house.title}`,
            }}
            data={house}
          >
            <HouseInfos key={house.id} house={house} />
          </Link>
          <div className={style.info_icons}>
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
          </div>
        </div>
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
    }).isRequired
  ).isRequired,
};
