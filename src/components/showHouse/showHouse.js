import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses } from '../../store/action/houseActions';
import style from './showHouse.module.scss';

const ShowHouse = () => {
  const houses = useSelector((state) => state.housesReducer.houses);
  const houseId = useParams();
  const dispatch = useDispatch();
  const [displayHouse, setDisplayHouse] = useState(null);
  const [getHouses, setGetHouses] = useState(null);

  useEffect(() => {
    if (!getHouses && houses.length === 0) {
      setGetHouses(true);
      dispatch(fetchHouses());
    }

    if (houses && houseId) {
      const newData = houses.find((house) => house.title === houseId.houseTitle);
      setDisplayHouse(newData);
    }
  });

  if (displayHouse) {
    return (
      <section className={style.show_container}>
        <div className={style.show_img}>
          <div className={style.img_div}>
            <img alt="house" src={displayHouse.image} />
          </div>
          <Link
            to={{
              pathname: '/',
            }}
            className={style.btn_home}
          >
            <button type="button" className={style.home}>
              <ArrowLeftIcon color="danger" sx={{ fontSize: 50 }} />
            </button>
          </Link>
        </div>
        <div className={style.show_content}>
          <div className={style.show_header}>
            <h1>{displayHouse.title}</h1>
            <p>
              {displayHouse.discount}
              % discount available for this choice
            </p>
          </div>
          <div className={style.show_finance}>
            <div className={style.finance_detail}>
              <p className={style.details}>Rent monthly cost</p>
              <p className={style.details}>
                $
                {displayHouse.price}
              </p>
            </div>
            <div className={style.finance_details}>
              <p className={style.details}>Discount fee</p>
              <p className={style.details}>
                $
                {(displayHouse.discount * displayHouse.price) / 100}
              </p>
            </div>
            <div className={style.finance_detail}>
              <p className={style.details}>Total amount payable</p>
              <p className={style.details}>
                $
                {displayHouse.price * displayHouse.availability
                  - (displayHouse.discount * displayHouse.price) / 100}
              </p>
            </div>
            <div className={style.finance_details}>
              <p className={style.details}>Availabiity</p>
              <p className={style.details}>
                {displayHouse.availability}
                <span className={style.details_text}>Months</span>
              </p>
            </div>
            <div className={style.show_discount}>
              <p>
                <span className={style.dis_amt}>
                  {displayHouse.discount}
                  % apr
                </span>
                <span className={style.dis_text}>representative</span>
              </p>
            </div>
          </div>
          <div className={style.more_house}>
            <span>Discover more Houses</span>
            <Link
              to={{
                pathname: '/',
              }}
            >
              <ArrowRightIcon color="success" sx={{ fontSize: 40 }} />
            </Link>
          </div>
          <Link
            to={{
              pathname: `/reserve/${displayHouse.id}`,
            }}
            data={displayHouse}
            className={style.btn_container}
          >
            <button type="button" className={style.btn}>
              Reserve
            </button>
          </Link>
        </div>
      </section>
    );
  }
  return (
    <div>
      <h1>Loading</h1>
    </div>
  );
};

export default ShowHouse;
