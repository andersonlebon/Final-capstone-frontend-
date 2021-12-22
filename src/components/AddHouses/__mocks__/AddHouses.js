import React from 'react';

const AddHouses = () => (
  <div className="container">
    <form className="add_form">
      <h1 className="form_head">ADD HOUSE</h1>
      <input type="text" name="title" placeholder="House title" required />
      <textarea
        name="house_description"
        placeholder="House description"
        required
      />
      <input type="text" name="location" placeholder="City" required />
      <input
        type="number"
        name="availability"
        placeholder="Availability"
        min="1"
        required
      />
      <input type="number" name="price" placeholder="Price" required />
      <input
        type="number"
        min="0"
        name="discount"
        placeholder="Discount"
        required
      />
      <input name="image" type="file" accept="image/*" />
      <input type="submit" value="Save" className="btn_primary" />
    </form>
  </div>
);

export default AddHouses;
