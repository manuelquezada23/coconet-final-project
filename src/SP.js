import React, { Component } from "react";
import validator from 'validator' 
import './App.css';
import AuthService from "./services/auth.service";

export default class SP extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeProjectName = this.onChangeProjectName.bind(this);
        this.onChangeProjectDate = this.onChangeProjectDate.bind(this);
        this.onChangeProjectPdf = this.onChangeProjectPdf.bind(this);
        this.onChangeClientName = this.onChangeClientName.bind(this);
        this.onChangeClientLocation = this.onChangeClientLocation.bind(this);
        this.onChangeClientWebsite = this.onChangeClientWebsite.bind(this);
        this.onChangeQualificationName = this.onChangeQualificationName.bind(this);
        this.onChangeQualificationDate = this.onChangeQualificationDate.bind(this);
        this.onChangeQualificationDocument = this.onChangeQualificationDocument.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);

        this.projectIndex = 0;
        this.clientIndex = 0;
        this.qualificationIndex = 0;

        this.projects = new Map();
        this.projects[0] = {projectId: this.projectIndex,
            projectName: "",
            projectDate: Number,
            projectPdf: ""
        };

        this.previousClients = new Map();
        this.previousClients[0] = {clientId: this.clientIndex,
            clientName: "",
            clientLocation: "",
            clientWebsite: ""
        };

        this.qualifications = new Map();
        this.qualifications[0] = {
            qualificationId: this.qualificationIndex,
            qualificationName: "",
            qualificationDate: Number,
            qualificationPdf: ""
        };

        this.state = {
            currentTutorial: {
                id: null,
                name: "",
                email: "",
                location: "",
                phone: "",
                website: "",
                sptype: "",
                ved: false,
                qualified: false,
                description: "",
                logo: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getTutorial(this.props.currentUser.id);
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

    onChangeName(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              name: title
            }
          };
        });
    }

    onChangeLocation(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              location: title
            }
          };
        });
    }

    onChangeType(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              sptype: title
            }
          };
        });
    }

    onChangeDescription(e) {
        const description = e.target.value;
        
        this.setState(prevState => ({
          currentTutorial: {
            ...prevState.currentTutorial,
            description: description
          }
        }));
    }

    onChangeProjectName(e) {
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.projects[index].projectName = e.target.value;
    }

    onChangeProjectDate(e) {
        // if date is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.projects[index].projectDate = e.target.value;
        // else 
            // note that its not valid date
            // console.log('Format is not valid');
    }

    onChangeProjectPdf(e) {
        // if pdf is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.projects[index].projectPdf = e.target.value;
        // else 
            // note that its not valid pdf
            // console.log('Format is not valid');
    }

    onChangeClientName(e) {
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.previousClients[index].clientName = e.target.value;
    }

    onChangeClientLocation(e) {
        // if location is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.previousClients[index].clientLocation = e.target.value;
        // else 
            // note that its not valid location
            // console.log('Format is not valid');
    }

    onChangeClientWebsite(e) {
        // if website is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.previousClients[index].clientWebsite = e.target.value;
        // else 
            // note that its not valid website
            // console.log('Format is not valid');
    }

    onChangeQualificationName(e) {
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.qualifications[index].qualificationName = e.target.value;
    }

    onChangeQualificationDate(e) {
        // if date is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.qualifications[index].qualificationDate = e.target.value;
        // else 
            // note that its not valid date
            // console.log('Format is not valid');
    }

    onChangeQualificationDocument(e) {
        // if document is valid
            const index = document.getElementById(e.target.id).parentElement.parentElement.id;
            this.qualifications[index].qualificationDocument = e.target.value;
        // else 
            // note that its not valid document
            // console.log('Format is not valid');
    }

    onChangePhoneNumber(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              phone: title
            }
          };
        });
    }

    validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onChangeEmail(e) {
        const title = e.target.value;
        if (this.validateEmail(title)){
            this.setState(function(prevState) {
                return {
                  currentTutorial: {
                    ...prevState.currentTutorial,
                    email: title
                  }
                };
              });
        }
    }

    onChangeWebsite(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              website: title
            }
          };
        });
    }

    onChangeLogo(e) {
        const title = e.target.value;
    
        this.setState(function(prevState) {
          return {
            currentTutorial: {
              ...prevState.currentTutorial,
              logo: title
            }
          };
        });
    }

    // Not implemented yet
    addCurrentProjects() {
        this.projects.forEach(project => {
            const newRow = document.getElementById('projectsSettingsBody').appendChild(document.createElement('tr'));
            const colName = newRow.insertCell(0);
            const colDate = newRow.insertCell(1);
            const colPdf = newRow.insertCell(2);

            colName.appendChild(document.createElement('input'));
            colDate.appendChild(document.createElement('input'));
            colPdf.appendChild(document.createElement('input'));

            newRow.id = project.projectId;
            colName.onChange = (e) => {this.onChangeProjectName(e)};
            colDate.onChange = (e) => {this.onChangeProjectDate(e)};
            colPdf.onChange = (e) => {this.onChangeProjectPdf(e)};
        });
    }

    addNewProject(e) {
        e.preventDefault();
        const newRow = document.getElementById('projectsSettingsBody').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.projectIndex++;
        const project = {projectId: this.projectIndex, projectName: "", projectDate: 0, projectPdf: ""};
        this.projects[this.projectIndex] = project;

        newRow.id = this.projectIndex;
        colName.onChange = (e) => {this.onChangeProjectName(e)};
        colDate.onChange = (e) => {this.onChangeProjectDate(e)};
        colPdf.onChange = (e) => {this.onChangeProjectPdf(e)};
    }

    // Not implemented yet
    removeProject(e) {
        e.preventDefault();
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.projects.remove(index);
    }

    // Not implemented yet
    addCurrentClients() {
        this.clients.forEach(client => {
            const newRow = document.getElementById('previousClientsSettingsBody').appendChild(document.createElement('tr'));
            const colName = newRow.insertCell(0);
            const colDate = newRow.insertCell(1);
            const colPdf = newRow.insertCell(2);

            colName.appendChild(document.createElement('input'));
            colDate.appendChild(document.createElement('input'));
            colPdf.appendChild(document.createElement('input'));

            newRow.id = client.clientId;
            colName.onChange = (e) => {this.onChangeClientName(e)};
            colDate.onChange = (e) => {this.onChangeClientLocation(e)};
            colPdf.onChange = (e) => {this.onChangeClientWebsite(e)};
        });
    }

    addNewClient(e) {
        e.preventDefault();
        const newRow = document.getElementById('previousClientsSettingsBody').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.previousClientIndex++;
        const client = {
            clientId: this.previousClientIndex,
            clientName: "",
            clientLocation: 0,
            clientWebsite: ""
        };
        this.previousClients[this.previousClientIndex] = client;

        newRow.id = this.previousClientIndex;
        colName.onChange = (e) => {this.onChangeClientName(e)};
        colDate.onChange = (e) => {this.onChangeClientLocation(e)};
        colPdf.onChange = (e) => {this.onChangeClientWebsite(e)};
    }

    // Not implemented yet
    removeClient(e) {
        e.preventDefault();
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.clients.remove(index);
    }

    // Not implemented yet
    addCurrentQualifications() {
        this.qualifications.forEach(qualification => {
            const newRow = document.getElementById('previousClientsSettingsBody').appendChild(document.createElement('tr'));
            const colName = newRow.insertCell(0);
            const colDate = newRow.insertCell(1);
            const colPdf = newRow.insertCell(2);

            colName.appendChild(document.createElement('input'));
            colDate.appendChild(document.createElement('input'));
            colPdf.appendChild(document.createElement('input'));

            newRow.id = qualification.qualificationId;
            colName.onChange = (e) => {this.onChangeQualificationName(e)};
            colDate.onChange = (e) => {this.onChangeQualificationDate(e)};
            colPdf.onChange = (e) => {this.onChangeQualificationPdf(e)};
        });
    }

    addNewQualification(e) {
        e.preventDefault();
        const newRow = document.getElementById('qualificationsSettingsBody').appendChild(document.createElement('tr'));
        const colName = newRow.insertCell(0);
        const colDate = newRow.insertCell(1);
        const colPdf = newRow.insertCell(2);

        colName.appendChild(document.createElement('input'));
        colDate.appendChild(document.createElement('input'));
        colPdf.appendChild(document.createElement('input'));
        
        this.qualificationIndex++;
        const qualification = {
            qualificationId: this.qualificationIndex,
            qualificationName: "",
            qualificationDate: 0,
            qualificationPdf: 0
        };
        this.qualifications[this.qualificationIndex] = qualification;

        newRow.id = this.qualificationIndex;
        colName.onChange = (e) => {this.onChangeQualificationName(e)};
        colDate.onChange = (e) => {this.onChangeQualificationDate(e)};
        colPdf.onChange = (e) => {this.onChangeQualificationPdf(e)};
    }

    // Not implemented yet
    removeQualification(e) {
        e.preventDefault();
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.qualifications.remove(index);
    }

    sendToPage(link) {
        window.location.href = link;
    }

    submitChanges() {
        AuthService.sp_update(
            this.state.currentTutorial.id,
            this.state.currentTutorial
          )
            .then(response => {
              console.log(response.data);
              this.setState({
                message: "The Service Provider was updated successfully!"
              });
            })
            .catch(e => {
              console.log(e);
            });
          this.sendToPage(`/sp/${this.state.currentTutorial.id}`);
    }

    render() {
        const { currentTutorial } = this.state;
        return (
            <React.Fragment>
                <div id="spSettingsContent" className='settingsContent'>
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
                                            value={currentTutorial.name}
                                            onChange={(e) => {this.onChangeName(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Location: </b></td>
                                    <td><input
                                            id="companyLocation"
                                            type="text"
                                            name="location"
                                            value={currentTutorial.location}
                                            onChange={(e)=> {this.onChangeLocation(e)}}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Service Type: </b></td>
                                    <td className="serviceTypeInputBox">
                                        <select
                                            className="serviceTypeDropdown"
                                            id="serviceType"
                                            onChange={(e) => {this.onChangeType(e)}}
                                            value = {currentTutorial.sptype}>
                                            <option value="Design"> Design </option>
                                            <option value="Construction"> Construction </option>
                                            <option value="Qualification"> Qualification </option>
                                            <option value="Maintenance"> Maintenance </option>
                                            <option value="Installation"> Installation </option>
                                        </select></td>
                                </tr>
                                <tr>
                                    <td className="settignsCategoryPromt"><b> Description: </b></td>
                                    <td><textarea
                                            className="companyDescriptionInput"
                                            id="description"
                                            type="text"
                                            name="description"
                                            value={currentTutorial.description}
                                            onChange={(e) => {this.onChangeDescription(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </form>

                    <br></br>
                            
                    <h2>Projects</h2>
                    <form id="form">
                        <table className="projectsSettings" id="projectsSettings">
                            <thead>
                                <tr>
                                    <td className="projectName"><b>Project Name</b></td>
                                    <td className="projectDate"><b>Date</b></td>
                                    <td className="projectPdf"><b>PDF</b></td>
                                </tr>
                            </thead>
                            <tbody id="projectsSettingsBody">
                                <tr id="0">
                                    <td>
                                        <input
                                            id="projectName"
                                            type="text"
                                            name="projectName"
                                            onChange={(e) => {this.onChangeProjectName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="projectDate"
                                            type="text"
                                            name="projectDate"
                                            onChange={(e) => {this.onChangeProjectDate(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="projectPdf"
                                            type="text"
                                            name="projectPdf"
                                            onChange={(e) => {this.onChangeProjectPdf(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="addProjectButton" onClick={(e) => {this.addNewProject(e)}}>Add Project</button>
                    </form>

                    <br></br>

                    <h2>Previous Clients</h2>
                    <form id="form">
                        <table className="previousClientsSettings" id="previousClientsSettings">
                            <thead>
                                <tr>
                                    <td className="clientName"><b>Client Name</b></td>
                                    <td className="clientLocation"><b>Location</b></td>
                                    <td className="clientWebsite"><b>Website</b></td>
                                </tr>
                            </thead>
                            <tbody  id="previousClientsSettingsBody">
                                <tr id="0">
                                    <td>
                                        <input
                                            id="clientName"
                                            type="text"
                                            name="clientName"
                                            onChange={(e) => {this.onChangeClientName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientLocation"
                                            type="text"
                                            name="clientLocation"
                                            onChange={(e) => {this.onChangeClientLocation(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientWebsite"
                                            type="text"
                                            name="clientWebsite"
                                            onChange={(e) => {this.onChangeClientWebsite(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={(e) => {this.addNewClient(e)}}>Add Client</button>
                    </form>

                    <br></br>

                    <h2>Qualifications</h2>
                    <form id="form">
                        <table className="qualificationsSettings" id="qualificationsSettings">
                            <thead>
                                <tr>
                                    <td className="qualificationName"><b>Qualification</b></td>
                                    <td className="qualificationDate"><b>Date</b></td>
                                    <td className="qualificationPdf"><b>Document</b></td>
                                </tr>
                            </thead>
                            <tbody id="qualificationsSettingsBody">
                                <tr id="0">
                                    <td>
                                        <input
                                            id="qualificationName"
                                            type="text"
                                            name="qualificationName"
                                            onChange={(e) => {this.onChangeQualificationName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="qualificationDate"
                                            type="text"
                                            name="qualificationDate"
                                            onChange={(e) => {this.onChangeQualificationDate(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="qualificationPdf"
                                            type="text"
                                            name="qualificationPdf"
                                            onChange={(e) => {this.onChangeQualificationDocument(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={(e) => {this.addNewQualification(e)}}>Add Qualification</button>
                    </form>

                    <br></br>

                    <h2>Licenses & Certifications</h2>
    
                    <br></br>

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
                                            value={currentTutorial.phone}
                                            onChange={(e) => {this.onChangePhoneNumber(e)}}
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
                                            value={currentTutorial.email}
                                            onChange={(e) => {this.onChangeEmail(e)}}
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
                                            value={currentTutorial.website}
                                            onChange={(e) => {this.onChangeWebsite(e)}}
                                        />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </form>
                    <button type="submit" value="Save" onClick={() => {this.submitChanges()}}>Save</button>
                </div>
            </React.Fragment>
        );
    }
}