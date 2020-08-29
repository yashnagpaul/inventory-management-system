import React, { Component } from "react";
import "./styles/App.css";
import ItemStatus from './components/ItemStatus';


import Header from "./components/Header";
import ListWarehouses from "./components/ListWarehouses";

class App extends Component {


  render() {
    return (
      <div className="App">
        <Header />
        {/* <AddWarehouse />
      <EditWarehouse /> */}
        <ItemStatus
        // warehouses={this.state.warehouses}
        />
      </div>
    );
  }
}

export default App;
