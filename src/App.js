import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";



// containers
import Login from "./lib/containers/auth/login/Login";

const LoginStack = ({ match }) => {
  return (
    <Switch>
      <Route exact path={match.url} component={Login} />
    </Switch>
  )
}


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginStack} />
      </Switch>
    </Router>
  );
}

export default App;
