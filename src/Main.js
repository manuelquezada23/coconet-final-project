import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./components/home.component"
import NotFound from "./NotFound.js"
import SPAbout from "./components/about.component"
import SPProjects from "./SPProjects.js"
import SPPreviousClients from "./SPPreviousClients.js"
import SPQualifications from "./SPQualifications.js"
import SPLicensesAndCertifications from "./SPLicensesAndCertifications.js"
import SPContact from "./SPContact.js"
import LogIn from "./components/login.component"
import SignUp from "./components/register.component"
import SPLogIn from "./components/login.component"
import SPSignUp from "./components/provider.component"
import SP from "./components/sp.component"
import spProfile from "./components/spprofile.component"

import userProfile from "./components/user.component"
import spedit from "./components/spedit.component"
import edit from "./components/edit.component"
import About from "./About.js"

import SettingsGeneral from "./SettingsGeneral.js"
import SettingsPrivacy from "./SettingsPrivacy.js"

const Main = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={LogIn}></Route>
            <Route exact path='/signup' component={SignUp}></Route>
            <Route exact path='/login-service-provider' component={SPLogIn}></Route>
            <Route exact path='/signup-service-provider' component={SPSignUp}></Route>

            {/* Service Provider Pages */}
            <Route exact path='/sp/:id' component={SPAbout}></Route>
            <Route exact path='/sp/:id/projects' component={SPProjects}></Route>
            <Route exact path='/sp/:id/previous-clients' component={SPPreviousClients}></Route>
            <Route exact path='/sp/:id/qualifications' component={SPQualifications}></Route>
            <Route exact path='/sp/:id/licenses-and-certifications' component={SPLicensesAndCertifications}></Route>
            <Route exact path='/sp/:id/contact' component={SPContact}></Route>

            <Route exact path='/sp' component={SP}></Route>
            <Route exact path='/sp/service/:service' component={SP}></Route>

            {/* Settings Pages */}
            <Route exact path='/sp/:id/settings-profile' component={spProfile}></Route>
            <Route exact path='/:id/settings-profile' component={userProfile}></Route>
            <Route exact path='/sp/:id/settings-profile/editing' component={spedit}></Route>
            <Route exact path='/:id/settings-profile/editing' component={edit}></Route>
            <Route exact path='/sp/:id/settings-general' component={SettingsGeneral}></Route>
            <Route exact path='/sp/:id/settings-privacy' component={SettingsPrivacy}></Route>
            <Route exact path='/  :id/settings-general' component={SettingsGeneral}></Route>
            <Route exact path='/:id/settings-privacy' component={SettingsPrivacy}></Route>

            <Route exact path="/about" component={About}></Route>

            {/* Handling error 404 */}
            <Route component={NotFound}></Route>
        </Switch>
   </BrowserRouter>
  );
}

export default Main;