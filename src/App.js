import React, { Component } from "react";

import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";


import "./App.css";

import Dashboard from "./components/dashboard/Dashboard";
import NewPost from "./components/newPost/NewPost";



import Login from "./components/login/Login";
import Register from "./components/register/Register";

import { ProtectedRoute } from "./components/shared/auth/ProtectedRoute";
import { LoggedInRoute } from "./components/shared/auth/LoggedInRoute";

import { Provider } from "react-redux";

import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import * as actions from "./actions";

const store = require("./reducer/Store").init();

class App extends Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this.checkAuthState();
  }

  checkAuthState = () => {
    store.dispatch(actions.checkAuthState());
  };

  logout = () => {
    store.dispatch(actions.logout());
  };

  

  render() {

    return (
      <Provider store={store}>
        <Router basename="/">
          <div className="App ">

            <Header logout={this.logout} />

            
            <ProtectedRoute exact path="/" component={Dashboard} />
            <Route exact path="/folder/:slug" component={Dashboard} />
            <Route exact path="/new" component={Dashboard} />
            

              <Route exact path="/login/" component={Login} />

              <LoggedInRoute exact path="/register" component={Register} />

           {/*<Footer />*/} 

          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
