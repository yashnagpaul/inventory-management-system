import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import App from "./App";
import Header from './components/Header';

import ListWarehouse from './components/ListWarehouses';
import DeleteConfirm from './components/DeleteWarehouse';
import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";
import WarehouseInventory from "./components/WarehouseInventory";
import ListInventories from "./components/ListInventories";
import ItemStatus from './components/ItemStatus';




ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <Redirect from="/" to="/warehouses/2922c286-16cd-4d43-ab98-c79f698aeab0" />
      <Header />
      <Switch>

        <Route path='/warehouses' component={ListWarehouse} exact/>
        <Route path='/warehouses/:id/delete' component={ListWarehouse} />
        <Route path='/inventory/:id' component={ItemStatus} exact/>
        {/* <Route path='/inventory' component={DeleteConfirm} exact/> */}
        <Route path="/warehouses/:id" component={WarehouseInventory} exact />

        {/* <Route path='/warehouse/delete-confirmation' component={DeleteConfirm} exact/> */}
        {/* // <Route path="/warehouses" component={ListWarehouse} exact /> */}
        <Route path='/inventory' component={ListInventories} exact/>
        {/* <Route path='/warehouses/:id' component={} /> */}
        {/* {/* <Route path='/warehouses/:id' component={} />
        {/* <Route path='/inventory' component={} exact/>
        <Route path='/warehouses/:id' component={} />
        <Route path='/inventory/:id' component={} />       
        <Route path='/inventory/:id/edit' component={} />      
        <Route path='/inventory/:id/add' component={} />
        <Route path='/*' component={NotFound} /> */}
        <Route path='/warehouses/:id/add' component={AddWarehouse} />
        <Route path='/warehouses/:id/edit' component={EditWarehouse} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
