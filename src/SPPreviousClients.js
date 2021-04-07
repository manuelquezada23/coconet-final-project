import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"

function SPPreviousClients() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/about")}}>About</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/projects")}}>Projects</h3>
                <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/previous-clients")}}>Previous Clients</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/qualifications")}}>Qualifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
            </div>
            <table className="SPPreviousClientsTable" >
                <colgroup>
                    <col span="1" style={{width: "30%"}}></col>
                    <col span="1" style={{width: "15%"}}></col>
                    <col span="1" style={{width: "20%"}}></col>
                </colgroup>
                <tr>
                    <th>Client Name</th>
                    <th>Location</th>
                    <th>Website</th>
                </tr>
                <tr>
                    <td>Brown University</td>
                    <td>Providence, RI</td>
                    <td><a href="http://www.brown.edu" target="_blank">www.brown.edu</a></td>
                </tr>
            </table>
        </React.Fragment>
    )    
}
export default SPPreviousClients;