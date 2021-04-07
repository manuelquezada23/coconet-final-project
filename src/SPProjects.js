import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"

function SPProjects() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/about")}}>About</h3>
                <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/projects")}}>Projects</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/previous-clients")}}>Previous Clients</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/qualifications")}}>Qualifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/licenses-and-certifications")}}>Licenses & Certifications</h3>
                <h3 className="SPSideBarBox" onClick={() => {sendToPage("/service-provider_id/contact")}}>Contact</h3>
            </div>
            <table className="SPProjectsTable" >
                <colgroup>
                    <col span="1" style={{width: "30%"}}></col>
                    <col span="1" style={{width: "25%"}}></col>
                    <col span="1" style={{width: "10%"}}></col>
                </colgroup>
                <tr>
                    <th>Project Name</th>
                    <th>Date</th>
                    <th>PDF</th>
                </tr>
                <tr>
                    <td>World Trade Center</td>
                    <td>January 31, 2006</td>
                    <td>link</td>
                </tr>
            </table>
        </React.Fragment>
    )    
}
export default SPProjects;