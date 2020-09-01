import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import App from "./App";
import Header from "./components/Header";

import ListWarehouse from "./components/ListWarehouses";
import DeleteConfirm from "./components/DeleteWarehouse";
import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";
import WarehouseInventory from "./components/WarehouseInventory";
import ListInventories from "./components/ListInventories";
import ItemStatus from "./components/ItemStatus";
import EditInventoryItem from "./components/EditInventoryItem";
import Footer from "./components/Footer";
import AddNewInventoryItem from "./components/AddNewInventoryItem";

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Redirect from="/" to="/warehouses" />
      <Header />
      <Switch>
        <Route path="/warehouses" component={ListWarehouse} exact />
        <Route path="/warehouses/:id/delete" component={ListWarehouse} exact />
        <Route path="/warehouses/:id" component={WarehouseInventory} exact />
        <Route path="/inventory/:id" component={ItemStatus} exact />
        <Route
          path="/warehouses/:name/inventory-status/:id"
          component={ItemStatus}
          exact
        />
        <Route
          path="/warehouses/:name/inventory/:id/delete"
          component={WarehouseInventory}
          exact
        />
        <Route
          path="/warehouses/:id/inventory"
          component={WarehouseInventory}
          exact
        />
        <Route path="/inventory/:id/delete" component={ListInventories} />
        <Route path="/inventory/:id/edit" component={EditInventoryItem} />
        <Route
          path="/inventory/:id/inventory-status/:id/edit"
          component={EditInventoryItem}
          exact
        />
        <Route
          path="/inventory/:id/inventory-status/:id"
          component={ItemStatus}
          exact
        />
        <Route path="/inventory" component={ListInventories} exact />
        <Route path="/warehouse/add" component={AddWarehouse} />
        <Route path="/warehouses/:id/edit" component={EditWarehouse} exact />
        <Route path="/inventories/add" component={AddNewInventoryItem} />
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

{
  /* <Route path='/inventory' component={DeleteConfirm} exact/> */
}

{
  /* <Route path='/warehouses/:id' component={} /> */
}

{
  /* {/* <Route path='/warehouses/:id' component={} />
        {/* <Route path='/inventory' component={} exact/>
        <Route path='/warehouses/:id' component={} />
        <Route path='/inventory/:id' component={} />       
        <Route path='/inventory/:id/edit' component={} />      
        <Route path='/inventory/:id/add' component={} />
        <Route path='/*' component={NotFound} /> */
}

{
  /* <Route path='/warehouse/delete-confirmation' component={DeleteConfirm} exact/> */
}

{
  /* // <Route path="/warehouses" component={ListWarehouse} exact /> */
}
