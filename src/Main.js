import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home.js"
import LogIn from "./components/login.component"
//import LogIn from "./LogIn.js"
import SignUp from "./SignUp.js"
import SPLogIn from "./SPLogIn.js"
import SPSignUp from "./SPSignUp.js"

const Main = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={LogIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/login-service-provider' component={SPLogIn}></Route>
            <Route exact path='/signup-service-provider' component={SPSignUp}></Route>
        </Switch>
   </BrowserRouter>
  );
}

export default Main;