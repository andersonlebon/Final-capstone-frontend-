import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeHouse } from '../../store/action/houseActions';
import style from './RemoveHouses.module.scss';

const RemoveHouses = () => {
  const dispatch = useDispatch();
  const user = { id: 1 };
  // const { user } = useSelector((state) => state.userReducer);

  const houseStore = useSelector((state) => state.housesReducer.houses);
  const [houses, setHouses] = useState(houseStore.filter((house) => house.user_id === user.id));

  const deleteHouse = (userId, id) => {
    dispatch(removeHouse(userId, id));
    setHouses((state) => state.filter((house) => house.id !== id));
  };

  const houseList = houses.map((house) => (
    <li key={house.id} className={style.card}>
      <img src={house.image} alt={house.title} className={style.image} />
      <div className={style.house_info}>
        <h1>{house.title}</h1>
        <p className={style.info}>{house.house_description}</p>
        <div className={style.info}>
          <span> Location:</span>

          <span>
            {house.location}
          </span>
        </div>
        <div className={style.info}>
          <span> Availability:</span>

          <span>
            {house.availability}
              &nbsp;month
          </span>
        </div>
        <div className={style.info}>
          <span>Price:</span>

          <span>
            $
            {house.price}
          </span>
        </div>
        <div className={style.info}>
          <span> Discount:</span>

          <span>
            {house.discount}
            %
          </span>
        </div>
      </div>
      <button type="button" onClick={() => deleteHouse(house.user_id, house.id)} className={style.btn_danger}>Delete</button>
    </li>
  ));

  return (
    <div className={style.container}>
      <h1>
        Remove house
      </h1>
      {houses.length > 0 ? (
        <ul className={style.list}>
          {houseList}
        </ul>
      )
        : (
          <p>
            You do not have houses
          </p>
        )}
    </div>
  );
};

export default RemoveHouses;
