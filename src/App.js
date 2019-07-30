import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import Login from './view/login/login';
import Admin from './view/admin/index';

function App() {
  // console.log("document.title", document.title,this.props);
  return ( <
    BrowserRouter >
    <
    Switch >
    <
    Route path = '/login'
    component = {
      Login
    } > < /Route> <
    Route path = '/'
    component = {
      Admin
    } > < /Route> <
    /Switch>

    <
    div className = "App" > {
      /* <Login /> */ } <
    /div> <
    /BrowserRouter>

  );
}

export default App;