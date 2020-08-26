import React from "react";

function AddNewInventoryItem() {
  return (
    <form className="add-warehouse">
      <h1 className="add-warehouse__heading">Add New Inventory Item</h1>
      <div className="add-warehouse__details-availability-container">
        <div className="add-warehouse__warehouse-details">
          <h3 className="add-warehouse__subheading">Item Details</h3>
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            name="name"
            className="add-warehouse__name"
            placeholder="Warehouse Name"
          />

          <label htmlFor="description">Description</label>
          <textarea
            type="text"
            name="description"
            className="add-warehouse__description"
            placeholder="Please enter a brief item description..."
          />

          <label htmlFor="category">Category</label>
          <select
            type="text"
            name="category"
            className="add-warehouse__category"
            placeholder="Please select"
          >
            <option value="electronics">Electronics</option>
          </select>

          <label fohtmlForr="country">Country</label>
          <input
            type="text"
            name="country"
            className="add-warehouse__country"
            placeholder="Country"
          />
        </div>

        {/* CONTACT DETAILS */}

        <div className="add-warehouse__contact-details">
          <h3 className="add-warehouse__subheading">Item Availability</h3>
          <label htmlFor="status">Status</label>
          <div className="add-inventory__radio-container">
            <input
              type="radio"
              name="status"
              className="add-inventory__radio"
              value="In stock"
            />
            <label class="radio-label" for="status">
              In stock
            </label>

            <input
              type="radio"
              name="status"
              className="add-inventory__radio"
              value="Out of stock"
            />
            <label htmlFor="status">Out of Stock</label>
          </div>
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            name="quantity"
            className="add-warehouse__position"
            placeholder="Position"
          />

          <label htmlFor="warehouse">Warehouse</label>
          <input
            type="text"
            name="warehouse"
            className="add-warehouse__number"
            placeholder="Number"
          />
        </div>
      </div>
      <div className="add-warehouse__btn-container">
        <button className="add-warehouse__cancel-btn">Cancel</button>
        <button className="add-warehouse__save-add-btn">+ Add Item</button>
      </div>
    </form>
  );
}

export default AddNewInventoryItem;
