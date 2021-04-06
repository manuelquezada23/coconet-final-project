import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"
import VerifiedBadge from "./images/verified-badge.png"
import QualifiedBadge from "./images/qualified-badge.png"

function SPAbout() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPHeader">
                <img className="SPLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"></img>
                <div className="SPInfo">
                    <div className="SPName">SP Name</div>
                    <div className="SPLocation">SP Location</div>
                    <div className="SPType">SP Type</div>
                    <div className="SPCredentials">
                        <img className="SPBadge" src={VerifiedBadge}></img>
                        <div className="SPBadgeText">Verified</div>
                        <img className="SPBadge" src={QualifiedBadge}></img>
                        <div className="SPBadgeText">Qualified</div>
                    </div>
                </div>
            </div>
            <div className="SPSideBar">
                <h3 style={{color: "#F2C70F"}}className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/about")}}>About</h3>
                <div id="bottomBorder"></div>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/projects")}}>Projects</h3>
                <div id="bottomBorder"></div>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/previous-clients")}}>Previous Clients</h3>
                <div id="bottomBorder"></div>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/qualifications")}}>Qualifications</h3>
                <div id="bottomBorder"></div>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <div id="bottomBorder"></div>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
                <div id="bottomBorder"></div>
            </div>
        </React.Fragment>
    )    
}
export default SPAbout;