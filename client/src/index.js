import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import ReactDOM from 'react-dom';
import Header from './components/Header';
import ListWarehouse from './components/ListWarehouses';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}  
    <Router>
    <Header />
      <Switch>
        <Route path='/warehouses' component={ListWarehouse} exact/>
        {/* <Route path='/inventory' component={} exact/>
        <Route path='/warehouses/:id' component={} />
        <Route path='/inventory/:id' component={} />
        <Route path='/warehouses/:id/edit' component={} />
        <Route path='/inventory/:id/edit' component={} />
        <Route path='/warehouses/:id/add' component={} />
        <Route path='/inventory/:id/add' component={} />
        <Route path='/*' component={NotFound} /> */}
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
