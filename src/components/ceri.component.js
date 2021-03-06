import React, { Component } from "react";
import AuthService from "../services/auth.service";
import '../App.css';
import NavigationBar from "../NavigationBar.js"

export default class SP extends Component {
    constructor(props) {
      super(props);
      this.getTutorial = this.getTutorial.bind(this);
      this.state = {
        currentTutorial: {
          username: "",
          email: ""
        },
        message: ""
      };
    }
  
    componentDidMount() {
        this.getTutorial(this.props.match.params.id);
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

    sendToPage(link) {
      window.location.href = link;
    }
  
    render() {
        const { currentTutorial } = this.state;

        return (
            <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
            <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}`)}}>About</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/projects`)}}>Projects</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/previous-clients`)}}>Previous Clients</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/qualifications`)}}>Qualifications</h3>
                    <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/licenses-and-certifications`)}}>Licenses & Certifications</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/contact`)}}>Contact</h3>
            </div>
            <div class="SPLicensesAndCertificationsGrid">
                <div class="grid-item">1</div>
                <div class="grid-item">2</div>
                <div class="grid-item">3</div>  
                <div class="grid-item">4</div>
                <div class="grid-item">5</div>
                <div class="grid-item">6</div>  
            </div>
        </React.Fragment>
        )
    }
  }