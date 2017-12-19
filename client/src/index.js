import React, { Component } from 'react';
import { render } from 'react-dom';

import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';

import LandingPage from './components/presentation/landingPage';
import User from './components/containers/user';
import UserInformation from './components/containers/UserInformation';
import UserAddress from './components/containers/UserAddress';


export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route exact path='/' component={LandingPage} />
              <Route path='/user' component={User} />
              <Route path='/user_information' component={UserInformation} />
              <Route path='/user_address' component={UserAddress} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));