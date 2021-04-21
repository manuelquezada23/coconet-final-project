import React, { Component } from "react";
import '../App.css';
import NavigationBar from "../NavigationBar.js"
import AuthService from "../services/auth.service";


export default class userProfile extends Component {
    constructor(props) {
        super(props);
        this.getTutorial = this.getTutorial.bind(this);
        this.state = {
          currentUser: AuthService.getCurrentUser()
        };
    }

    componentDidMount() {
        this.getTutorial(this.props.match.params.id);
    }
  
    getTutorial(id) {
        AuthService.get(id)
          .then(response => {
            this.setState({
              currentUser: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    sendToPage(link) {
        window.location.href = link;
    }
    render() {
        const { currentUser } = this.state;
        if (currentUser.role === "ROLE_USER") {
            return (
                <React.Fragment>
                <NavigationBar />
                <div className="SettingsMain">
                    <h1>Settings</h1>
                    <div className="SettingsBody">
                        <div className="SettingsSideBar">
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/${currentUser.id}/settings-profile`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Profile</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/${currentUser.id}/settings-general`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                            </div>
                            <div className="SettingsSideBarContent" style={{backgroundColor: "#F2C70F"}} onClick={() => {this.sendToPage(`/${currentUser.id}/settings-privacy`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                            </div>
                        </div>
                        <div className='SettingsContent'>
                            Privacy info goes here.
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        } else {
            return (
                <React.Fragment>
                <NavigationBar />
                <div className="SettingsMain">
                    <h1>Settings</h1>
                    <div className="SettingsBody">
                        <div className="SettingsSideBar">
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-profile`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Profile</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-general`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                            </div>
                            <div className="SettingsSideBarContent" style={{backgroundColor: "#F2C70F"}} onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-privacy`)}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                            </div>
                        </div>
                        <div className='SettingsContent'>
                            Privacy info goes here.
                        </div>
                    </div>
                </div>
            </React.Fragment>
            )
        }
        
    }
}