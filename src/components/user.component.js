import React, { Component } from "react";
import '../App.css';
import NavigationBar from "../NavigationBar.js"
import AuthService from "../services/auth.service";

//<button id="editrProfile" onClick={() => {this.sendToPage(`/${currentUser.id}/settings-profile/editing`)}}>Edit Profile</button>

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
        return (
            <React.Fragment>
                <NavigationBar />
                <div className="SettingsMain">
                    <h1>Settings</h1>
                    <div className="SettingsBody">
                        <div className="SettingsSideBar">
                            <div className="SettingsSideBarContent" style={{backgroundColor: "#F2C70F"}} onClick={() => {this.sendToPage("/settings-profile")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Profile</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage("/settings-general")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                            </div>
                            <div className="SettingsSideBarContent" onClick={() => {this.sendToPage("/settings-privacy")}}>
                                <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                            </div>
                        </div>
                        <div className='SettingsContent'>
                            <div>Username:
                                <div>{currentUser.name}</div>
                            </div>
                            <div>Email:
                                <div>{currentUser.email}</div>
                            </div>
                        </div>
                    </div>
                    <div className='SettingsContent'>
                        Profile info goes here.
                        {/* <User /> */}
                        <button id="logout" onClick={() => {AuthService.logout()}}>Log Out</button>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}