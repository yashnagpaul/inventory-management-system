import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";
import ListWarehouses from "./components/ListWarehouses";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <AddWarehouse />
      <EditWarehouse /> */}
      <ListWarehouses />
    </div>
  );
}

export default App;
