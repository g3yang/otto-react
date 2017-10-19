import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import Login from '../components/Login';
import TodoList from '../components/TodoList';

const Root = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/login" component={Login} />
        <Route
          path="/contact"
          render={() => <h1>Contact Us</h1>} />
        <Route path ="/todos" component={TodoList} />
      </Switch>
    </Router>
  );
};

export default Root;

