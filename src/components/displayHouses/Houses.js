import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel/Carousel';
import { fetchHouses } from '../../store/action/houseActions';
import style from './Houses.module.scss';

const Houses = () => {
  const houses = useSelector((state) => state.housesReducer.houses);
  const dispatch = useDispatch();
  const [getHouses, setGetHouses] = useState(null);

  useEffect(() => {
    if (!getHouses && houses.length === 0) {
      dispatch(fetchHouses());
    }
  }, []);

  useEffect(() => {
    setGetHouses(houses.houses);
  }, [houses]);

  return (
    <div className={style.main_container}>
      <header className={style.main_header}>
        <h1>Available Houses</h1>
        <p>Please select a suitable house</p>
        <div className={style.divider} />
      </header>
      <section className={style.main_body}>
        <Carousel houses={houses} />
      </section>
    </div>
  );
};

export default Houses;
