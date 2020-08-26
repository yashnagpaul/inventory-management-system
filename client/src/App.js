import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";
import DeleteConfirm from "./components/DeleteConfirm";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <AddWarehouse />
      <EditWarehouse /> */}
      <DeleteConfirm/>
    </div>
  );
}

export default App;
