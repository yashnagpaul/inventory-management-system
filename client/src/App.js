import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";

function App() {
  return (
    <div className="App">
      <Header />
      <AddWarehouse />
      <EditWarehouse />
    </div>
  );
}

export default App;
