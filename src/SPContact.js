import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"
import PhoneIcon from "./images/phoneIcon.png"
import EmailIcon from "./images/emailIcon.png"
import WebsiteIcon from "./images/websiteIcon.png"

function SPContact() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/sp/:id")}}>About</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/sp/:id/projects")}}>Projects</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/sp/:id/previous-clients")}}>Previous Clients</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/sp/:id/qualifications")}}>Qualifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/sp/:id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
            </div>
            <div className="SPAboutIcons">
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={PhoneIcon}></img>
                        <p className="iconDescription">SP Phone</p>
                    </div>
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={EmailIcon}></img>
                        <p className="iconDescription">SP Email</p>
                    </div>
                    <div className="iconAlignment">
                        <img className="aboutIcon" src={WebsiteIcon}></img>
                        <p className="iconDescription">SP Website</p>
                    </div>
                </div> 
        </React.Fragment>
    )    
}
export default SPContact;