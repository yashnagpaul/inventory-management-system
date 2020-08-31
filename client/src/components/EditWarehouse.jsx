import React from "react";
import axios from "axios";
import arrow from "../assets/Icons/arrow_back-24px.svg";
import { link, Link } from "react-router-dom";

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

  nameUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { name: value } });
  };

  addressUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { address: value } });
  };
  cityUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { city: value } });
  };
  countryUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { country: value } });
  };

  contactNameUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { contactName: value } });
  };

  positionUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { position: value } });
  };

  numberUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { number: value } });
  };

  emailUpdated = (e) => {
    const { value } = e.target;
    this.setState({ itemDetails: { email: value } });
  };

  saveHandler(event) {
    event.preventDefault();

    const itemToEdit = {
      id: this.props.match.params.id,

      name: this.form.current.name.value,
      address: this.form.current.address.value,
      city: this.form.current.city.value,
      country: this.form.current.country.value,
      contactName: this.form.current.contact_name.value,
      position: this.form.current.position.value,
      number: this.form.current.number.value,
      email: this.form.current.email.value,
    };

    axios
      .put(
        `http://localhost:8080/api/warehouses/${this.props.match.params.id}`,
        itemToEdit
      )
      .then(window.alert("Changes have been saved."));
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/warehouses")
      .then((response) =>
        response.data.filter(
          (warehouse) => warehouse.id === this.props.match.params.id
        )
      )
      .then((result) =>
        // console.log(result)
        this.setState({
          itemDetails: {
            name: result[0].name,
            address: result[0].address,
            city: result[0].city,
            country: result[0].country,
            contactName: result[0].contact.name,
            position: result[0].contact.position,
            number: result[0].contact.phone,
            email: result[0].contact.email,
          },
        })
      );
  }

  render() {
    return (
      <form
        ref={this.form}
        onSubmit={this.saveHandler}
        className="add-warehouse"
      >
        <div className="add-warehouse__heading-arrow-container">
          <Link to="/warehouses">
            <img className="add-warehouse__arrow" src={arrow} alt="arrow" />
          </Link>
          <h1 className="add-warehouse__heading">Edit Warehouse</h1>
        </div>
        <div className="add-warehouse__details-availability-container">
          <div className="add-warehouse__warehouse-details">
            <h3 className="add-warehouse__subheading">Warehouse Details</h3>
            <label htmlFor="name">Warehouse Name</label>
            <input
              type="text"
              name="name"
              className="add-warehouse__name"
              value={this.state.itemDetails.name}
              onInput={this.nameUpdated}
            />

            <label htmlFor="street-address">Street Address</label>
            <input
              type="text"
              name="address"
              className="add-warehouse__street-address"
              value={this.state.itemDetails.address}
              onInput={this.addressUpdated}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="add-warehouse__city"
              value={this.state.itemDetails.city}
              onInput={this.cityUpdated}
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              className="add-warehouse__country"
              value={this.state.itemDetails.country}
              onInput={this.countryUpdated}
            />
          </div>

          {/* CONTACT DETAILS */}

          <div className="add-warehouse__contact-details">
            <h3 className="add-warehouse__subheading">Contact Details</h3>
            <label htmlFor="contact-name">Contact Name</label>
            <input
              type="text"
              name="contact_name"
              className="add-warehouse__contact"
              value={this.state.itemDetails.contactName}
              onInput={this.contactNameUpdated}
            />

            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              className="add-warehouse__position"
              value={this.state.itemDetails.position}
              onInput={this.positionUpdated}
            />

            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              className="add-warehouse__number"
              value={this.state.itemDetails.number}
              onInput={this.numberUpdated}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="add-warehouse__email"
              value={this.state.itemDetails.email}
              onInput={this.emailUpdated}
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
