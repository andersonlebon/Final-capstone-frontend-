import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchHouses, removeHouse } from '../store/action/houseActions';

const RemoveHouses = () => {
  const dispatch = useDispatch();
  const user = { id: 1 };
  // const { user } = useSelector((state) => state.userReducer);
  const [houses, setHouses] = useState(useSelector((state) => state.housesReducer.houses));

  const deleteHouse = (userId, id) => {
    dispatch(removeHouse(userId, id));
    dispatch(fetchHouses());
    setHouses((state) => state.filter((house) => house.id !== id));
  };

  const houseList = houses.map((house) => (
    <li key={house.id}>
      <div>
        <img src={house.image} alt="modern house" style={{ width: '200px' }} />
        <div>
          <h1>{house.title}</h1>
          { house.user_id === user.id ? <button type="button" onClick={() => deleteHouse(house.user_id, house.id)}>Delete</button> : null}
        </div>
        <p>{house.description}</p>
        <span>{house.location}</span>
        <span>{house.availability}</span>
        <span>{house.price}</span>
        <span>{house.discount}</span>
      </div>
    </li>
  ));

  return (
    <>
      <h1>
        Remove house
      </h1>
      <ul>
        {houseList}
      </ul>
    </>
  );
};

export default RemoveHouses;
