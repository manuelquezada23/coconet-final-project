import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"

function SPLicensesAndCertifications() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/about")}}>About</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/projects")}}>Projects</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/previous-clients")}}>Previous Clients</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/qualifications")}}>Qualifications</h3>
                <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
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
export default SPLicensesAndCertifications;