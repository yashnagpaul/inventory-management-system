import React, { Component } from "react";
import "./styles/App.css";
import axios from "axios";

import Header from "./components/Header";
// import AddWarehouse from "./components/AddWarehouse";
// import EditWarehouse from "./components/EditWarehouse";
import ListWarehouses from "./components/ListWarehouses";

class App extends Component {
  state = {
    warehouses: [],
  };

  componentDidMount() {
    axios.get("http://localhost:8080/api/warehouses").then((response) => {
      console.log("Warehouse List",  response.data);
      this.setState({
        warehouses: [...this.state.warehouses, response.data]
      })
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
        {/* <AddWarehouse />
      <EditWarehouse /> */}
        <ListWarehouses 
        warehouses={this.state.warehouses}
        />
      </div>
    );
  }
}

export default App;
