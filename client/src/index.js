import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import ReactDOM from 'react-dom';
<<<<<<< HEAD
import Header from './components/Header';
import ListWarehouse from './components/ListWarehouses';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import DeleteConfirm from './components/DeleteConfirm';
=======
import Header from "./components/Header";
import ListWarehouse from "./components/ListWarehouses";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> 0a4d950d54777d1382ed2e953f84c71aaacdb626

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Router>
      <Header />
      <Switch>
<<<<<<< HEAD
        <Route path='/warehouses' component={ListWarehouse} exact/>
        <Route path='/inventory' component={DeleteConfirm} exact/>
        {/* <Route path='/warehouse/delete-confirmation' component={DeleteConfirm} exact/> */}
        {/* <Route path='/warehouses/:id' component={} />
=======
        <Route path="/warehouses" component={ListWarehouse} exact />
        {/* <Route path='/inventory' component={} exact/>
        <Route path='/warehouses/:id' component={} />
>>>>>>> 0a4d950d54777d1382ed2e953f84c71aaacdb626
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
