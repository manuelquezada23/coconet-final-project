import React, { Component } from "react";
import validator from 'validator';
import './App.css';
import AuthService from "./services/auth.service";

export default class User extends Component {
    constructor(props) {
        super(props);
        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        
        this.state = {
            currentTutorial: {
                id: null,
                name: "",
                email: "",
                location: "",
                phone: "",
                website: "",
                sptype: "",
                ved: false,
                qualified: false,
                description: "",
                logo: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getTutorial(this.props.currentUser.id);
    }
  
    getTutorial(id) {
        AuthService.get(id)
          .then(response => {
            this.setState({
              currentTutorial: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    onChangeUsername(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              name: title
            }
          };
        });
    }

    onChangePhoneNumber(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              phone: title
            }
          };
        });
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onChangeEmail(e) {
        const title = e.target.value;
        if (this.validateEmail(title)){
            this.setState(function(prevState) {
                return {
                  currentTutorial: {
                    ...prevState.currentTutorial,
                    email: title
                  }
                };
              });
        }
    }

    onChangeWebsite(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              website: title
            }
          };
        });
    }

    sendToPage(link) {
        window.location.href = link;
    }


    submitChanges() {
        AuthService.update(
            this.state.currentTutorial.id,
            this.state.currentTutorial
          )
            .then(response => {
              console.log(response.data);
              this.setState({
                message: "The User was updated successfully!"
              });
            })
            .catch(e => {
              console.log(e);
            });
    }

    render() {
        const { currentTutorial } = this.state;
        // if (currentUser) {
        if (true) {
            return (
                <React.Fragment>
                    <div id="userSettingsContent" className='settingsContent'>
                    <form>
                        <table className="aboutForm" id="aboutSettings">
                            <tbody>
                                
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Username: </b></td>
                                    <td><input
                                            id="username"
                                            type="text"
                                            name="username"
                                            value={currentTutorial.name}
                                            onChange={(e) => {this.onChangeUsername(e)}}
                                        />
                                    </td>
                                </tr>
                            
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Phone Number: </b></td>
                                    <td>
                                        <input
                                            id="userPhoneNumber"
                                            type="text"
                                            name="phoneNumber"
                                            value={currentTutorial.phone}
                                            onChange={(e) => {this.onChangePhoneNumber(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Email: </b></td>
                                    <td>
                                        <input
                                            id="userEmail"
                                            type="text"
                                            name="email"
                                            value={currentTutorial.email}
                                            onChange={(e) => {this.onChangeEmail(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Website: </b></td>
                                    <td>
                                        <input
                                            id="userWebsite"
                                            type="text"
                                            name="website"
                                            value={currentTutorial.website}
                                            onChange={(e) => {this.onChangeWebsite(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                    <button type="submit" value="Save" onClick={() => {this.submitChanges()}}>Save</button>
                </div>
                </React.Fragment>
                );
        }
        else {
            this.sendToPage("/")
        }
    }
}