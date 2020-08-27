import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// import ReactDOM from 'react-dom';


import Header from './components/Header';
import ListWarehouse from './components/ListWarehouses';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DeleteConfirm from './components/DeleteConfirm';

import Header from "./components/Header";
import ListWarehouse from "./components/ListWarehouses";

import AddWarehouse from "./components/AddWarehouse";
import EditWarehouse from "./components/EditWarehouse";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";



ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
    <Redirect from="/" to="/warehouses" />
      <Header />
      <Switch>

        <Route path='/warehouses' component={ListWarehouse} exact/>
        <Route path='/inventory' component={DeleteConfirm} exact/>
        <Route path="/warehouses/:id" component={ListWarehouse} exact />
        {/* <Route path='/warehouse/delete-confirmation' component={DeleteConfirm} exact/> */}

        {/* <Route path='/warehouses/:id' component={} />

        <Route path="/warehouses" component={ListWarehouse} exact />
        {/* <Route path='/inventory' component={} exact/>
        <Route path='/warehouses/:id' component={} />


        {/* {/* <Route path='/warehouses/:id' component={} /> */}
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
