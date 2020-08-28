import React from "react";

class EditInventoryItem extends React.Component {
  saveHandler() {}

  render() {
    return (
      <form className="add-warehouse">
        <h1 className="add-warehouse__heading">Edit Inventory Item</h1>
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

            <label htmlFor="country">Country</label>
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
            <div className="add-warehouse__radio-container">
              <input
                type="radio"
                name="status"
                className="add-warehouse__radio"
                value="In stock"
              />
              <label htmlFor="status">In stock</label>

              <input
                type="radio"
                name="status"
                className="add-warehouse__radio"
                value="Out of stock"
              />
              <label htmlFor="status">Out of Stock</label>
            </div>

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
          <button className="add-warehouse__save-add-btn">Save</button>
        </div>
      </form>
    );
  }
}

export default EditInventoryItem;
