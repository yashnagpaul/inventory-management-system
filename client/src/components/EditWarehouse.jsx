import React from "react";

class EditWarehouse extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.saveHandler = this.saveHandler.bind(this);
  }

  state = {
    itemDetails: {
      name: "loading",
      address: "loading",
      city: "loading",
      country: "loading",
      contactName: "loading",
      position: "loading",
      number: "loading",
      email: "loading",
    },
  };

  saveHandler(event) {
    event.preventDefault();

    const itemToEdit = {
      id: this.props.match.url,

      name: this.form.current.name.value,
      address: this.form.current.name.value,
      city: this.form.current.name.value,
      country: this.form.current.name.value,
      contactName: this.form.current.contact_name.value,
      position: this.form.current.name.value,
      number: this.form.current.name.value,
      email: this.form.current.name.value,
    };

    console.log(itemToEdit);
    //axios request
  }

  render() {
    return (
      <form onSubmit={this.saveHandler} className="add-warehouse">
        <h1 className="add-warehouse__heading">Edit Warehouse</h1>
        <div className="add-warehouse__details-availability-container">
          <div className="add-warehouse__warehouse-details">
            <h3 className="add-warehouse__subheading">Warehouse Details</h3>
            <label for="name">Warehouse Name</label>
            <input
              type="text"
              name="name"
              className="add-warehouse__name"
              placeholder="Warehouse Name"
            />

            <label for="street-address">Street Address</label>
            <input
              type="text"
              name="street-address"
              className="add-warehouse__street-address"
              placeholder="Street Address"
            />

            <label for="city">City</label>
            <input
              type="text"
              name="city"
              className="add-warehouse__city"
              placeholder="City"
            />

            <label for="country">Country</label>
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
            <label for="contact-name">Contact Name</label>
            <input
              type="text"
              name="contact_name"
              className="add-warehouse__contact"
              placeholder="Contact Name"
            />

            <label for="position">Position</label>
            <input
              type="text"
              name="position"
              className="add-warehouse__position"
              placeholder="Position"
            />

            <label for="number">Number</label>
            <input
              type="text"
              name="number"
              className="add-warehouse__number"
              placeholder="Number"
            />

            <label for="email">Email</label>
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
          <button className="add-warehouse__save-add-btn">Save</button>
        </div>
      </form>
    );
  }
}
export default EditWarehouse;
