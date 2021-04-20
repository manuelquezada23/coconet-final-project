import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"
import VerifiedBadge from "./images/verified-badge.png"
import QualifiedBadge from "./images/qualified-badge.png"
import PhoneIcon from "./images/phoneIcon.png"
import EmailIcon from "./images/emailIcon.png"
import WebsiteIcon from "./images/websiteIcon.png"

function SPAbout() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
                <h3 style={{color: "#F2C70F"}}className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/about")}}>About</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/projects")}}>Projects</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/previous-clients")}}>Previous Clients</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/qualifications")}}>Qualifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
            </div>
            <div className="SPHeader">
                <img className="SPLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png" alt="service provider logo"></img>
                <div className="SPInfo">
                    <div className="SPName">SP Name</div>
                    <div className="SPLocation">SP Location</div>
                    <div className="SPType">SP Type</div>
                    <div className="SPCredentials">
                        <img className="SPBadge" src={VerifiedBadge} alt="service provider badge"></img>
                        <div className="SPBadgeText">Verified</div>
                        <img className="SPBadge" src={QualifiedBadge} alt="service provider badge"></img>
                        <div className="SPBadgeText">Qualified</div>
                    </div>
                </div>
            </div>
            <div className="SPAboutBody">
                <div className="SPAboutIcons">
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={PhoneIcon} alt="about icon"></img>
                        <p className="iconDescription">SP Phone</p>
                    </div>
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={EmailIcon} alt="about icon"></img>
                        <p className="iconDescription">SP Email</p>
                    </div>
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={WebsiteIcon} alt="about icon"></img>
                        <p className="iconDescription">SP Website</p>
                    </div>
                </div>  
                <div className="SPAboutDescription">
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                    SP description goes here. SP description goes here. SP description goes here. 
                </div>
            </div>
            <div className="SPAboutCoverPhoto">
                Cover photo goes here.
            </div>
        </React.Fragment>
    )    
}
export default SPAbout;