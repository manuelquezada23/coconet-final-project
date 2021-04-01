import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home.js"
import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"

const Main = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={LogIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
        </Switch>
   </BrowserRouter>
  );
}

export default Main;