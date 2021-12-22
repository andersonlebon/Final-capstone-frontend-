import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Carousel from './Carousel/Carousel';
import { fetchHouses } from '../../store/action/houseActions';
import style from './Houses.module.scss';

const Houses = () => {
  const houses = useSelector((state) => state.housesReducer.houses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchHouses());
  }, []);

  return (
    <div className={style.main_container}>
      <header className={style.main_header}>
        <h1>Available Houses</h1>
        <p>Please select a suitable house</p>
        <div className={style.divider_home} />
      </header>
      <section className={style.main_body}>
        <Carousel houses={houses} />
      </section>
    </div>
  );
};

export default Houses;
