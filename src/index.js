import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import rootReducer from './Reducers';

// FOR REDUX
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleware  from 'redux-promise';
import PersonDetail from './Components/PersonDetail';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/:name" component={PersonDetail} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

