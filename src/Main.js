import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from "./Home.js"
//import LogInComponent from "./LogIn.js"
//simport SignUpComponent from "./SignUp.js"
//import SPLogInComponent from "./SPLogIn.js"
//import SPSignUpComponent from "./SPSignUp.js"
import NotFound from "./NotFound.js"
import SPAbout from "./SPAbout.js"
import SPProjects from "./SPProjects.js"
import SPPreviousClients from "./SPPreviousClients.js"
import SPQualifications from "./SPQualifications.js"
import SPLicensesAndCertifications from "./SPLicensesAndCertifications.js"
import SPContact from "./SPContact.js"
import LogIn from "./components/login.component"
//import LogIn from "./LogIn.js"
//import SignUp from "./SignUp.js"
import SignUp from "./components/register.component"
//import SPLogIn from "./SPLogIn.js"
import SPLogIn from "./components/login.component"
//import SPSignUp from "./SPSignUp.js"
import SPSignUp from "./components/provider.component"
import Search from "./Search.js"
import SettingsProfile from "./SettingsProfile.js"
import SettingsGeneral from "./SettingsGeneral.js"
import SettingsPrivacy from "./SettingsPrivacy.js"
import Search from "./Search.js"
//import Search from "./components/search.component"

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
            <Route exact path='/service-provider_id/about' component={SPAbout}></Route>
            <Route exact path='/service-provider_id/projects' component={SPProjects}></Route>
            <Route exact path='/service-provider_id/previous-clients' component={SPPreviousClients}></Route>
            <Route exact path='/service-provider_id/qualifications' component={SPQualifications}></Route>
            <Route exact path='/service-provider_id/licenses-and-certifications' component={SPLicensesAndCertifications}></Route>
            <Route exact path='/service-provider_id/contact' component={SPContact}></Route>

            <Route exact path='/search' component={Search}></Route>

            {/* Settings Pages */}
            <Route exact path='/settings-profile' component={SettingsProfile}></Route>
            <Route exact path='/settings-general' component={SettingsGeneral}></Route>
            <Route exact path='/settings-privacy' component={SettingsPrivacy}></Route>

            {/* Handling error 404 */}
            <Route component={NotFound}></Route>
        </Switch>
   </BrowserRouter>
  );
}

export default Main;