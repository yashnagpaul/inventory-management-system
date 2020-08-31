import React from "react";
import axios from "axios";

class EditInventoryItem extends React.Component {
  constructor(props) {
    super(props);
    this.form = React.createRef();
    this.saveHandler = this.saveHandler.bind(this);
  }

  state = {
    itemDetails: {
      name: "loading",
      description: "loading",
      category: "loading",
      status: "loading",
      quantity: "loading",
      warehouse: "loading",
    },
  };

  nameUpdated = (e) => {
    const { value } = e.target;
    this.setState({ name: value });
  };

  descriptionUpdated = (e) => {
    const { value } = e.target;
    this.setState({ description: value });
  };
  categoryUpdated = (e) => {
    const { value } = e.target;
    this.setState({ category: value });
  };
  statusUpdated = (e) => {
    const { value } = e.target;
    this.setState({ status: value });
  };

  quantityUpdated = (e) => {
    const { value } = e.target;
    this.setState({ quantity: value });
  };

  warehouseUpdated = (e) => {
    const { value } = e.target;
    this.setState({ warehouse: value });
  };

  saveHandler(event) {
    event.preventDefault();
    const itemToEdit = {
      id: this.props.match.params.id,

      name: this.form.current.name.value,
      description: this.form.current.name.value,
      category: this.form.current.name.value,
      status: this.form.current.name.value,
      quantity: this.form.current.quantity.value,
      warehouse: this.form.current.name.value,
    };

    axios
      .patch("http://localhost:8080/api/inventory", itemToEdit)
      .then(window.alert("Changes have been saved."));
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/api/inventory")
      .then((response) =>
        response.data.filter((item) => item.id === this.props.match.params.id)
      )
      .then((result) => {
        this.setState(
          (this.state = {
            description: result[0].description,
            name: result[0].itemName,
            category: result[0].category,
            status: result[0].status,
            quantity: result[0].quantity,
            warehouse: result[0].warehouseName,
          })
        );
      });
  }

  render() {
    console.log(this.props.match.params.id);
    return (
      <form
        onSubmit={this.saveHandler}
        ref={this.form}
        className="add-warehouse"
      >
        <h1 className="add-warehouse__heading">Edit Inventory Item</h1>
        <div className="add-warehouse__details-availability-container">
          <div className="add-warehouse__warehouse-details">
            <h3 className="add-warehouse__subheading">Item Details</h3>
            <label htmlFor="name">Item Name</label>
            <input
              type="text"
              name="name"
              className="add-warehouse__name"
              value={this.state.name}
              onInput={this.nameUpdated}
            />

            <label htmlFor="description">Description</label>
            <textarea
              type="text"
              name="description"
              className="add-warehouse__description"
              value={this.state.description}
              onInput={this.descriptionUpdated}
            />

            <label htmlFor="category">Category</label>
            <select
              type="text"
              name="category"
              className="add-warehouse__category"
              onInput={this.categoryUpdated}
            >
              <option value={this.state.category}>{this.state.category}</option>
              <option value="electronics">Electronics</option>
              <option value="Gear">Gear</option>
              <option value="Apparel">Apparel</option>
              <option value="Accessories">Accessories</option>
              <option value="Health">Health</option>
            </select>
          </div>

          {/* ITEM AVAILABILITY */}

          <div className="add-warehouse__contact-details">
            <h3 className="add-warehouse__subheading">Item Availability</h3>
            <label htmlFor="status">Status</label>
            <div className="add-warehouse__radio-container">
              <input
                type="radio"
                name="status"
                className="add-warehouse__radio"
                value="In stock"
                onInput={this.statusUpdated}
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

            <div
              style={{
                display: this.state.status === "In Stock" ? "flex" : "none",
                flexDirection: "column",
              }}
            >
              <label for="quantity">Quantity</label>
              <input
                name="quantity"
                type="text"
                value={this.state.quantity}
                onInput={this.quantityUpdated}
              ></input>
            </div>

            <label htmlFor="warehouse">Warehouse</label>
            <input
              type="text"
              name="warehouse"
              className="add-warehouse__number"
              value={this.state.warehouse}
              onChange={this.warehouseUpdated}
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
