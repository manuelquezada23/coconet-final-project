import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import '../App.css';
import NavigationBar from "../NavigationBar.js"
import VerifiedBadge from "../images/verified-badge.png"
import QualifiedBadge from "../images/qualified-badge.png"
import PhoneIcon from "../images/phoneIcon.png"
import EmailIcon from "../images/emailIcon.png"
import WebsiteIcon from "../images/websiteIcon.png"

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
                    <h3 style={{color: "#F2C70F"}}className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}`)}}>About</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/projects`)}}>Projects</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/previous-clients`)}}>Previous Clients</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/qualifications`)}}>Qualifications</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/licenses-and-certifications`)}}>Licenses & Certifications</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/contact`)}}>Contact</h3>
                </div>
                <div className="SPHeader">
                    <img className="SPLogo" src={currentTutorial.logo}></img>
                    <div className="SPInfo">
                        <div className="SPName">{currentTutorial.name}</div>
                        <div className="SPLocation">{currentTutorial.location}</div>
                        <div className="SPType">{currentTutorial.sptype}</div>
                        <div className="SPCredentials">
                          <div style={{ display: currentTutorial.ved ? "inline" : "none"}}>
                            <img className="SPBadge" src={VerifiedBadge}></img>
                            <div className="SPBadgeText">Verified</div>
                          </div>
                          <div style={{ display: currentTutorial.qualified ? "inline" : "none"}}>
                            <img className="SPBadge" src={QualifiedBadge}></img>
                            <div className="SPBadgeText">Qualified</div>
                          </div>
                        </div>
                    </div>
                </div>
                <div className="SPAboutBody">
                    <div className="SPAboutIcons">
                        <div className="iconAlignment">
                            <img className="aboutIcon" src={PhoneIcon}></img>
                            <p className="iconDescription">{currentTutorial.phone}</p>
                        </div>
                        <div className="iconAlignment">
                            <img className="aboutIcon" src={EmailIcon}></img>
                            <p className="iconDescription">{currentTutorial.email}</p>
                        </div>
                        <div className="iconAlignment">
                            <img className="aboutIcon" src={WebsiteIcon}></img>
                            <p className="iconDescription">{currentTutorial.website}</p>
                        </div>
                    </div>  
                    <div className="SPAboutDescription">
                      {currentTutorial.description}
                    </div>
                </div>
            </React.Fragment>
        )
    }
  }