import React, { Component } from "react";
import validator from 'validator' 
import './App.css';

export default class SP extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);

        this.projectIndex = 0;
        this.clientIndex = 0;
        this.qualificationIndex = 0;
        
        this.about = [
            // currentUser: AuthService.getCurrentUser()
            {name: ""},
            {location: ""},
            {type: ""},
            {description: ""},
        ];

        this.projects = [
            {projectId: this.projectIndex,
            projectName: "",
            projectDate: Number,
            projectPdf: ""}
        ];

        this.previousClients = [
            {clientId: this.clientIndex,
            clientName: "",
            clientLocation: "",
            clientWebsite: ""}
        ];

        this.qualifications = [
            {qualificationId: this.qualificationIndex,
            qualificationName: "",
            qualificationDate: Number,
            qualificationPdf: ""}
        ];

        this.contact = [
            {phoneNumber: "(XXX)XXX-XXXX"},
            {email: "example@sp.com"},
            {website: "example.com"}
        ];
    }

    onChangeName(e) {
        this.about[0] = e.target.value;
    }

    onChangeLocation(e) {
        this.about[1] = e.target.value;
    }

    onChangeType(e) {
        this.about[2] = e.target.value;
    }

    onChangeDescription(e) {
        this.about[3] = e.target.value;
    }

    onChangeProjectName(e, index) {
        this.projects[index].projectName = e.target.value;
    }


    onChangePhoneNumber(e) {
        if (validator.isMobilePhone(e.target.value)) {
            this.contact[0] = e.target.value;
        } else {
            // note that its not valid phone number
            console.log('Phone number format is incorrect');
        }
    }

    onChangeEmail(e) {
        // if email is valid
            this.contact[1] = e.target.value;
        // else 
            // note that its not valid email
            console.log('Email format is incorrect');
    }

    onChangeWebsite(e) {
        // if url is valid
            this.contact[2] = e.target.value;
        // else 
            // note that its not valid url
            console.log('Url format is incorrect');
    }

    addProject(e) {
        e.preventDefault();
        const newRow = document.getElementById('projectsSettings').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.projectIndex++;
        const project = {projectId: this.projectIndex, projectName: "", projectDate: 0,};
        this.projects.push(project);

        newRow.value = this.projectIndex;
    }

    removeProject(e) {
        e.preventDefault();
        this.projectIndex--;
        const project = {projectId: this.projectIndex, projectName: "", projectDate: 0,};
        this.projects.push(project);
    }

    addClient(e) {
        e.preventDefault();
        const newRow = document.getElementById('previousClientsSettings').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.previousClientIndex++;
        const project = {projectId: this.previousClientIndex, projectName: "", projectDate: 0,};
        this.projects.push(project);

        newRow.value = this.previousClientIndex;
    }

    addQualification(e) {
        e.preventDefault();
        const newRow = document.getElementById('qualificationsSettings').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.qualificationIndex++;
        const qualification = {qualificationId: this.qualificationIndex, qualificationName: "", qualificationDate: 0,};
        this.qualifications.push(qualification);

        newRow.value = this.qualificationIndex;
    }

    sendToPage(link) {
        window.location.href = link;
    }

    render() {
        // const { currentUser } = this.state;
        // if (currentUser) {
        if (true) {
            return (
                <React.Fragment>
                    <div id="settingsContent" className='settingsContent'>
                        <h2>About</h2>
                        <form>
                            <table className="aboutForm" id="aboutSettings">
                                <tbody>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Company Name: </b></td>
                                        <td><input
                                                id="companyName"
                                                type="text"
                                                name="name"
                                                onChange={e => {this.onChangeName(e)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Location: </b></td>
                                        <td><input
                                                id="companyLocation"
                                                type="text"
                                                name="location"
                                                onChange={e => {this.onChangeLocation(e)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Service Type: </b></td>
                                        <td className="serviceTypeInputBox">
                                            <select className="serviceTypeDropdown" id="serviceType" onChange={e => {this.onChangeType(e)}}>
                                                <option defaultValue> </option>
                                                <option> Design </option>
                                                <option> Construction </option>
                                                <option> Qualification </option>
                                                <option> Maintenance </option>
                                                <option> Installation </option>
                                            </select></td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Description: </b></td>
                                        <td><textarea
                                                className="companyDescriptionInput"
                                                id="description"
                                                type="text"
                                                name="description"
                                                onChange={e => {this.onChangeDescription(e)}}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                                
                            </table>
                        </form>
                                
                        <h2>Projects</h2>
                        <form>
                            <table id="projectsSettings">
                                <thead>
                                    <tr>
                                        <td className="projectName"><b>Project Name</b></td>
                                        <td className="projectDate"><b>Date</b></td>
                                        <td className="projectPdf"><b>PDF</b></td>
                                    </tr>
                                </thead>
                                <tbody id="projectsSettingsBody">
                                    <tr value="0">
                                        <td>
                                            <input
                                                type="text"
                                                name="projectName"
                                                onChange={e => {this.onChangeProjectName(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="projectDate"
                                                onChange={e => {this.onChangeProjectDate(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="projectPdf"
                                                onChange={e => {this.onChangeProjectPdf(e)}}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className="addProjectButton" onClick={e => {this.addProject(e)}}>Add Project</button>
                        </form>

                        <h2>Previous Clients</h2>
                        <form>
                            <table id="previousClientsSettings">
                                <thead>
                                    <tr>
                                        <td className="clientName"><b>Client Name</b></td>
                                        <td className="clientLocation"><b>Location</b></td>
                                        <td className="clientWebsite"><b>Website</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr value="0">
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeClientName(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeClientLocation(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeClientWebsite(e)}}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={e => {this.addClient(e)}}>Add Client</button>
                        </form>

                        <h2>Qualifications</h2>
                        <form>
                            <table id="qualificationsSettings">
                                <thead>
                                    <tr>
                                        <td className="qualificationName"><b>Qualification</b></td>
                                        <td className="qualificationDate"><b>Date</b></td>
                                        <td className="qualificationDocument"><b>Document</b></td>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr value="0">
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeQualificationName(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeQualificationDate(e)}}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                onChange={e => {this.onChangeQualificationDocument(e)}}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={e => {this.addQualification(e)}}>Add Qualification</button>
                        </form>

                        <h2>Licenses & Certifications</h2>
        

                        <h2>Contact</h2>
                        <form>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Phone Number: </b></td>
                                        <td>
                                            <input
                                                id="companyPhoneNumber"
                                                type="text"
                                                name="phoneNumber"
                                                onChange={e => {this.onChangePhoneNumber(e)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Email: </b></td>
                                        <td>
                                            <input
                                                id="companyEmail"
                                                type="text"
                                                name="email"
                                                onChange={e => {this.onChangeEmail(e)}}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Website: </b></td>
                                        <td>
                                            <input
                                                id="companyWebsite"
                                                type="text"
                                                name="website"
                                                onChange={e => {this.onChangeWebsite(e)}}
                                            />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                </React.Fragment>
            );
        }
        else {
            this.sendToPage("/")
        }
    }
}