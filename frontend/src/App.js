import React, { Component } from 'react';
import { Route, BrowserRouter as Router, Switch }  from 'react-router-dom';
import jwt_decode from "jwt-decode";
import Landing from './component/layout/Landing';
import Login from './auth/Login';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import Register from './auth/Register';

import store from './store';

import Token from './auth/Token';
import { Provider } from "react-redux";



// Check for token to keep user logged in
import setAuthToken from './utils/setAuthToken';
import { logoutUser, setCurrentUser } from './actions/authActions';
import Notice from './auth/Notice';


import Profile from './component/dashboard/Profile';
import PrivateRoute from "./component/private-route/PrivateRoute";
import UserList from './component/dashboard/UserList';
import UpdateCustomer from './component/dashboard/UpdateCustomer';

if(localStorage.jwtToken){
  const token=localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded=jwt_decode(token);
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime= Date.now()/1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <Router>
         <div className="App">
        <Navbar/>
        <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/notice" component={Notice} />
          <Route path="/verify/:token" component={Token} />
          <Route  path="/userlist" component={UserList} />
          <Route  path="/update/:id" component={UpdateCustomer} />
          
          <Switch>
           <PrivateRoute exact path="/dashboard" component={Dashboard} />
           <PrivateRoute  path="/profile" component={Profile} />
              
            </Switch>
      </div>
      </Router>
     </Provider>

    );
  }
}
export default App;