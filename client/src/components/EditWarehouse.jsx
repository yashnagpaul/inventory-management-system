import React from "react";
import axios from "axios";

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

<<<<<<< HEAD
  // componentDidMount() {
  //   axios.get("http://localhost:8080/api/warehouses").then((response) => {
  //     response.data
  //       .filter((warehouse) => warehouse.id !== this.match.url)
  //       .then((result) =>
  //         this.setState({
  //           itemDetails: {
  //             name: result.name,
  //             address: result.address,
  //             city: result.city,
  //             country: result.country,
  //             contactName: result.contact.name,
  //             position: result.contact.position,
  //             number: result.contact.number,
  //             emaiil: result.contact.email,
  //           },
  //         })
  //       );
  //   });
  // }
=======
  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then((response) => {
      response.data
        .filter((warehouse) => warehouse.id !== this.match.url)
        .then((result) =>
          this.setState({
            itemDetails: {
              name: result.name,
              address: result.address,
              city: result.city,
              country: result.country,
              contactName: result.contact.name,
              position: result.contact.position,
              number: result.contact.number,
              emaiil: result.contact.email,
            },
          })
        );
    });
  }
>>>>>>> master

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

    axios
      .patch("http://localhost:8080/api/warehouses", itemToEdit)
      .then(window.alert("Changes have been saved."));
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
              value={this.state.name}
            />

            <label for="street-address">Street Address</label>
            <input
              type="text"
              name="street-address"
              className="add-warehouse__street-address"
              value={this.state.address}
            />

            <label for="city">City</label>
            <input
              type="text"
              name="city"
              className="add-warehouse__city"
              value={this.state.city}
            />

            <label for="country">Country</label>
            <input
              type="text"
              name="country"
              className="add-warehouse__country"
              value={this.state.country}
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
              value={this.state.contactName}
            />

            <label for="position">Position</label>
            <input
              type="text"
              name="position"
              className="add-warehouse__position"
              value={this.state.position}
            />

            <label for="number">Number</label>
            <input
              type="text"
              name="number"
              className="add-warehouse__number"
              value={this.state.number}
            />

            <label for="email">Email</label>
            <input
              type="text"
              name="email"
              className="add-warehouse__email"
              value={this.state.email}
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
