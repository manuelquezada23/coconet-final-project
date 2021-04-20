import React, { Component } from "react";
import './App.css';

export default class SP extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
    
        this.about = {
            // currentUser: AuthService.getCurrentUser()
            name: "SP Name",
            location: "Location",
            type: "Type",
            description: "description description description description description",
        };

        this.projects = [
            {projectName: "Name",
            projectDate: "Date",
            projectPdf: "Link"}
        ];

        this.contact = {
            phoneNumber: "(401)000-0000",
            email: "example@sp.com",
            website: "example.com"
        };
    }

    onChangeName(e) {
        this.setState((about) => {
          return {name: e.target.value};
        });
    }

    addProject() {
        const newRow = document.getElementByID('projectsSettings').appendChild(document.createElement('tr'));
        console.log(document.getElementByID('projectsSettings'));
        newRow.innerHTML(`<td></td>
            <td></td>
            <td></td>`);
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
                            <table id="aboutSettings">
                                <tbody>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Company Name: </b></td>
                                        <td><input
                                                id="companyName"
                                                type="text"
                                                name="name"
                                                value={this.about.name}
                                                onChange={this.onChangeName}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Location: </b></td>
                                        <td><input
                                                id="companyLocation"
                                                type="text"
                                                name="location"
                                                value={this.about.location}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="settignsCategoryPromt"><b> Service Type: </b></td>
                                        <td className="serviceTypeInputBox">
                                            <select className="serviceTypeDropdown" id="serviceType">
                                                <option defaultValue> {this.about.type} </option>
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
                                                value={this.about.description}
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
                                    <td className="projectNameInput"><b>Project Name</b></td>
                                    <td className="projectDateInput"><b>Date</b></td>
                                    <td className="projectPdfInput"><b>PDF</b></td>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><input
                                                value={this.projects.projectName}
                                            />
                                        </td>
                                        <td><input
                                                value={this.projects.projectDate}
                                            /></td>
                                        <td><input
                                                value={this.projects.projectPdf}
                                            /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <button onClick={() => {this.addProject()}}>Add Project</button>
                        </form>

                        <h2>Previous Clients</h2>

                        <h2>Qualifications</h2>

                        <h2>Licenses & Certifications</h2>

                        <h2>Contact</h2>
                        <form>
                            <table>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Phone Number: </b></td>
                                    <td><input id="companyPhoneNumber" type="text" name="phoneNumber" value={this.contact.phoneNumber}/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Email: </b></td>
                                    <td><input id="companyEmail" type="text" name="email" value={this.contact.email}/></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Website: </b></td>
                                    <td><input id="companyWebsite" type="text" name="website" value={this.contact.website}/></td>
                                </tr>
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