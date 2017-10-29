import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../components/App';
import LoginPage from '../containers/LoginPage';
import TodoPage from '../containers/TodoPage';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from '../reducers';
import thunk from 'redux-thunk';


let store = createStore(reducers,
  applyMiddleware(thunk)
);


const Root = () => {
  return (
    <Provider store = {store}>
      <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/login" component={LoginPage} />
          <Route
            path="/contact"
            render={() => <h1>Contact Us</h1>} />
          <Route path ="/todos" component={TodoPage} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default Root;

