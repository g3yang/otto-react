import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} />
      </Switch>
    </Router>
  );
};

export default Root;

