import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
import AnimalDashboard from './components/AnimalDashboard';

import Login from "./components/Login.js";
import Header from "./components/Header.js";

export default function App() {

  return (
    <div className="App">
      <Header />
      <Switch>
        {/* Build out a Private Route */}
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/creatures" component={AnimalDashboard} />
      </Switch>
    </div>
  );
};
