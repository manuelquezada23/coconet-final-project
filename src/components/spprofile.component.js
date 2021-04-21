import React, { Component } from "react";
import '../App.css';
import NavigationBar from "../NavigationBar.js"
import AuthService from "../services/auth.service";
import SPedit from "../SP.js"
import User from "../User.js"

export default class spProfile extends Component {
    constructor(props) {
        super(props);
        this.getTutorial = this.getTutorial.bind(this);
        this.state = {
          currentUser: AuthService.getCurrentUser()
        };
    }

    componentWillMount(){
        //If user is an Alumno, throw them to '/some/path'
        if(this.props.match.params.id != AuthService.getCurrentUser().id){
            alert("You cannot access others' accounts")
            //window.location.href = "/";
            this.props.history.push('/');
        }
           
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
                                <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-general`)}}>
                                    <p style={{marginTop: "10px", marginLeft: "15px"}}>General</p>
                                </div>
                                <div className="SettingsSideBarContent" onClick={() => {this.sendToPage(`/sp/${currentUser.id}/settings-privacy`)}}>
                                    <p style={{marginTop: "10px", marginLeft: "15px"}}>Privacy</p>
                                </div>
                            </div>
                            
                            <SPedit currentUser={this.state.currentUser}/>
                        </div>
                    </div>
                    
                </React.Fragment>
            )
        }
       
        
    
}