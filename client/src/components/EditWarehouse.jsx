import React from "react";
import axios from "axios";
import arrow from "../assets/Icons/arrow_back-24px.svg";
import { link, Link, Redirect } from "react-router-dom";

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
      phone: "loading",
      email: "loading",
    },
  };


componentDidMount(){
  axios.get(`http://localhost:8080/api/warehouses/${this.props.match.params.id}`)
  .then((response) => {
    console.log('response.data', response.data)
    this.setState (
{
  itemDetails: { 
      name: response.data.name, 
      address: response.data.address,
      city: response.data.city,
      country: response.data.country,
      contactName: response.data.contact.name,
      position: response.data.contact.position,
      phone: response.data.contact.phone,
      email: response.data.contact.email,
  }
}
    );
  })
}



  saveHandler(event) {
    event.preventDefault();

console.log('id', this.props.match.params.id);
console.log('event', event.target.address.value);

    const itemToEdit = {
      id: this.props.match.params.id,
      name: event.target.name.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contactName: event.target.contact_name.value,
      position: event.target.position.value,
      phone: event.target.number.value,
      email: event.target.email.value,
      // contactName: this.form.current.contact_name.value,
      // position: this.form.current.name.value,
      // phone: this.form.current.name.value,
      // email: this.form.current.name.value,
    };

    axios
      .put("http://localhost:8080/api/warehouses", itemToEdit)
      // .then(window.alert("Changes have been saved."));
      // .then(this.props.history.push('/warehouses'))
      .then(() =>  <Redirect to="/" />)

      console.log('itemtoedit', itemToEdit);
  }



  // saveHandler = (e) => {
  //   e.preventDefault();
  //   console.log('e.target', e.target);
  // }
  _handleChangeEvent(val) {
    return val;
  }
  
  render() {
    return (
      <form onSubmit={this.saveHandler} className="add-warehouse">
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
              // onChangeText={name => this.setState({ name: this.state.itemDetails.name })}
              // value ={this.state.itemDetails.name}
              
              // onChange={()=>{this._handleChangeEvent(this.state.itemDetails.name)}} 
                   defaultValue={this.state.itemDetails.name}

            />

            <label htmlFor="street-address">Street Address</label>
            <input
              type="text"
              name="address"
              className="add-warehouse__street-address"
              value={this.state.itemDetails.address}
            />

            <label htmlFor="city">City</label>
            <input
              type="text"
              name="city"
              className="add-warehouse__city"
              value={this.state.itemDetails.city}
              // onInput={this.setState({ itemDetails: { city: "123" } })}
            />

            <label htmlFor="country">Country</label>
            <input
              type="text"
              name="country"
              className="add-warehouse__country"
              value={this.state.itemDetails.country}
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
            />

            <label htmlFor="position">Position</label>
            <input
              type="text"
              name="position"
              className="add-warehouse__position"
              value={this.state.itemDetails.position}
            />

            <label htmlFor="number">Number</label>
            <input
              type="text"
              name="number"
              className="add-warehouse__number"
              value={this.state.itemDetails.phone}
            />

            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="add-warehouse__email"
              value={this.state.itemDetails.email}
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
