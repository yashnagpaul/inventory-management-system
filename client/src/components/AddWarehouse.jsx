import React from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

class AddWarehouse extends React.Component {
  constructor(props) {
    super(props);
    this.submitHandler = this.submitHandler.bind(this);
    this.form = React.createRef();
  }

  submitHandler(event) {
    event.preventDefault();

    // RETRIEVE THE VALUES FROM THE FORM
    let id = uuidv4();
    let name = this.form.current.name.value;
    let address = this.form.current.address.value;
    let city = this.form.current.city.value;
    let country = this.form.current.country.value;
    let contactName = this.form.current.contactName.value;
    let position = this.form.current.position.value;
    let number = this.form.current.number.value;
    let email = this.form.current.email.value;

    // POST THE NEW WAREHOUSE DETAILS TO OUR DATABASE
    axios.post("http://localhost:8080/api/warehouses", {
      id: id,
      name: name,
      address: address,
      city: city,
      country: country,
      contact: {
        contactName: contactName,
        position: position,
        number: number,
        email: email,
      },
    });

    //RESET THE FORM
    event.target.reset();
  }

  render() {
    return (
      <form
        ref={this.form}
        className="add-warehouse"
        onSubmit={this.submitHandler}
      >
        <h1 className="add-warehouse__heading">Add New Warehouse</h1>
        <div className="add-warehouse__details-availability-container">
          <div className="add-warehouse__warehouse-details">
            <h3 className="add-warehouse__subheading">Warehouse Details</h3>
            <label htmlFor="name">Warehouse Name</label>
            <input
              type="text"
              name="name"
              className="add-warehouse__name"
              placeholder="Warehouse Name"
            />

            <label htmlFor="address">Street Address</label>
            <input
              type="text"
              name="address"
              className="add-warehouse__street-address"
              placeholder="Street Address"
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="add-warehouse__city"
              placeholder="City"
            />

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
            <h3 className="add-warehouse__subheading">Contact Details</h3>
            <label htmlFor="contactName">Contact Name</label>
            <input
              type="text"
              name="contactName"
              className="add-warehouse__contact"
              placeholder="Contact Name"
            />

            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              className="add-warehouse__position"
              placeholder="Position"
            />

            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              className="add-warehouse__number"
              placeholder="Number"
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="add-warehouse__email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="add-warehouse__btn-container">
          <button className="add-warehouse__cancel-btn">Cancel</button>
          <button type="submit" className="add-warehouse__save-add-btn">
            + Add Warehouse
          </button>
        </div>
      </form>
    );
  }
}

export default AddWarehouse;
