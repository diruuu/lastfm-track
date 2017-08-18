import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import Home from './containers/home';
import Artist from './containers/artist';
import store from './create-store';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store()}>
    <Router>
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/artist/:artist`} component={Artist} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
