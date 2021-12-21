import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addHouse } from '../../store/action/houseActions';
import style from './AddHouses.module.scss';

const AddHouses = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = { id: 1 };
  // const { user } = useSelector((state) => state.userReducer);
  const [house, setHouse] = useState({ user_id: user.id, availability: 12 });

  const handleNewHouse = (e) => {
    setHouse((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const addNewHouse = (e) => {
    e.preventDefault();
    dispatch(addHouse(house));
    navigate('/');
  };

  return (
    <div className={style.container}>
      <form onSubmit={addNewHouse} className={style.add_form}>
        <h1 className={style.form_head}>ADD HOUSE</h1>
        <input type="text" name="title" onChange={handleNewHouse} placeholder="House title" required />
        <textarea onChange={handleNewHouse} name="house_description" placeholder="House description" required />
        <input type="text" name="location" onChange={handleNewHouse} placeholder="City" required />
        <input type="number" name="availability" onChange={handleNewHouse} placeholder="Availability" min="1" required />
        <input type="number" name="price" onChange={handleNewHouse} placeholder="Price" required />
        <input type="number" min="0" name="discount" onChange={handleNewHouse} placeholder="Discount" required />
        <input type="text" name="image" onChange={handleNewHouse} placeholder="Image" required />
        <input type="submit" value="Save" className={style.btn_primary} />
      </form>
    </div>
  );
};

export default AddHouses;
