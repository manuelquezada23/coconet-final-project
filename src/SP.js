import React, { Component } from "react";
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

        this.state = {
            projects: [],
            clients: [],
            qualifications: [],
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
            project: {
                id: null,
                name: "",
                date: "",
                pdf: "",
                owner: null
            },
            client: {
                id: null,
                name: "",
                date: "",
                pdf: "",
                owner: null
            },
            qualification: {
                id: null,
                name: "",
                date: "",
                pdf: "",
                owner: null
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getTutorial(this.props.currentUser.id);
        this.addCurrentProjects();
        this.addCurrentClients();
        this.addCurrentQualifications();
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
        this.setState(function(prevState) {
            return {
              project: {
                ...prevState.project,
                name: e.target.value
              }
            };
        });
    }

    onChangeProjectDate(e) {
        this.setState(function(prevState) {
            return {
              project: {
                ...prevState.project,
                date: e.target.value
              }
            };
        });
    }

    onChangeProjectPdf(e) {
        this.setState(function(prevState) {
            return {
              project: {
                ...prevState.project,
                pdf: e.target.value
              }
            };
        });
    }

    onChangeClientName(e) {
        this.setState(function(prevState) {
            return {
              client: {
                ...prevState.client,
                name: e.target.value
              }
            };
        });
    }

    onChangeClientLocation(e) {
        this.setState(function(prevState) {
            return {
              client: {
                ...prevState.client,
                date: e.target.value
              }
            };
        });
    }

    onChangeClientWebsite(e) {
        this.setState(function(prevState) {
            return {
              client: {
                ...prevState.client,
                pdf: e.target.value
              }
            };
        });
    }

    onChangeQualificationName(e) {
        this.setState(function(prevState) {
            return {
              qualification: {
                ...prevState.qualification,
                name: e.target.value
              }
            };
        });
    }

    onChangeQualificationDate(e) {
        this.setState(function(prevState) {
            return {
              qualification: {
                ...prevState.qualification,
                date: e.target.value
              }
            };
        });
    }

    onChangeQualificationDocument(e) {
        this.setState(function(prevState) {
            return {
              qualification: {
                ...prevState.qualification,
                pdf: e.target.value
              }
            };
        });
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

    addCurrentProjects() {

        AuthService.get_proj(this.props.currentUser.id)
          .then(response => {
            this.setState({
              projects: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    addNewProject(e) {
        e.preventDefault();

        let data = {
            name: this.state.project.name,
            date: this.state.project.date,
            pdf: this.state.project.pdf,
            owner: this.state.currentTutorial.id
        };
      
        AuthService.create_proj(data)
            .then(response => {
              console.log(response.data);
              this.addCurrentProjects();
      
              this.setState({
                  project: {
                      id: null,
                      name: "",
                      date: "",
                      pdf: "",
                      owner: null
                  }
              }, () => {
              });
            })
            .catch(e => {
              console.log(e);
            });

    }

    // Not implemented yet
    removeProject(e) {
        e.preventDefault();
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.projects.remove(index);
    }

    // Not implemented yet
    addCurrentClients() {
        AuthService.get_cl(this.props.currentUser.id)
          .then(response => {
            this.setState({
              clients: response.data
            });
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    addNewClient(e) {
        e.preventDefault();

        let data = {
            name: this.state.client.name,
            date: this.state.client.date,
            pdf: this.state.client.pdf,
            owner: this.state.currentTutorial.id
        };
      
        AuthService.create_cl(data)
            .then(response => {
              console.log(response.data);
              this.addCurrentClients();
      
              this.setState({
                  client: {
                      id: null,
                      name: "",
                      date: "",
                      pdf: "",
                      owner: null
                  }
              }, () => {
              });
            })
            .catch(e => {
              console.log(e);
            });
    }

    // Not implemented yet
    removeClient(e) {
        e.preventDefault();
        const index = document.getElementById(e.target.id).parentElement.parentElement.id;
        this.clients.remove(index);
    }

    // Not implemented yet
    addCurrentQualifications() {
        AuthService.get_q(this.props.currentUser.id)
        .then(response => {
          this.setState({
            qualifications: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }

    addNewQualification(e) {
        e.preventDefault();

        let data = {
            name: this.state.qualification.name,
            date: this.state.qualification.date,
            pdf: this.state.qualification.pdf,
            owner: this.state.currentTutorial.id
        };
      
        AuthService.create_q(data)
            .then(response => {
              console.log(response.data);
              this.addCurrentQualifications();
      
              this.setState({
                qualification: {
                      id: null,
                      name: "",
                      date: "",
                      pdf: "",
                      owner: null
                  }
              }, () => {
              });
            })
            .catch(e => {
              console.log(e);
            });
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
        const { currentTutorial, projects, clients, qualifications} = this.state;
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
                            {projects &&
                        projects.map((user, index) => (
                            <tr id={user.id}>
                            <td>
                                <input
                                    id="projectName"
                                    type="text"
                                    name="projectName"
                                    value={user.name}

                                />
                            </td>
                            <td>
                                <input
                                    id="projectDate"
                                    type="text"
                                    name="projectDate"
                                    value={user.date}

                                />
                            </td>
                            <td>
                                <input
                                    id="projectPdf"
                                    type="text"
                                    name="projectPdf"
                                    value={user.pdf}

                                />
                            </td>
                        </tr>
                      ))}
                                <tr>
                                    <td>
                                        <input
                                            id="projectName"
                                            type="text"
                                            name="projectName"
                                            value={this.state.project.name}
                                            onChange={(e) => {this.onChangeProjectName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="projectDate"
                                            type="text"
                                            name="projectDate"
                                            value={this.state.project.date}
                                            onChange={(e) => {this.onChangeProjectDate(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="projectPdf"
                                            type="text"
                                            name="projectPdf"
                                            value={this.state.project.pdf}
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
                            {clients &&
                        clients.map((user, index) => (
                            <tr id={user.id}>
                                    <td>
                                        <input
                                            id="clientName"
                                            type="text"
                                            name="clientName"
                                            value={user.name}

                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientLocation"
                                            type="text"
                                            name="clientLocation"
                                            value={user.date}

                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientWebsite"
                                            type="text"
                                            name="clientWebsite"
                                            value={user.pdf}

                                        />
                                    </td>
                                </tr>
                      ))}
                                <tr>
                                    <td>
                                        <input
                                            id="clientName"
                                            type="text"
                                            name="clientName"
                                            value={this.state.client.name}
                                            onChange={(e) => {this.onChangeClientName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientLocation"
                                            type="text"
                                            name="clientLocation"
                                            value={this.state.client.date}
                                            onChange={(e) => {this.onChangeClientLocation(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="clientWebsite"
                                            type="text"
                                            name="clientWebsite"
                                            value={this.state.client.pdf}
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
                            {qualifications &&
                        qualifications.map((user, index) => (
                            <tr id={user.id}>
                            <td>
                                <input
                                    id="qualificationName"
                                    type="text"
                                    name="qualificationName"
                                    value={user.name}

                                />
                            </td>
                            <td>
                                <input
                                    id="qualificationDate"
                                    type="text"
                                    name="qualificationDate"
                                    value={user.date}

                                />
                            </td>
                            <td>
                                <input
                                    id="qualificationPdf"
                                    type="text"
                                    name="qualificationPdf"
                                    value={user.pdf}

                                />
                            </td>
                        </tr>
                      ))}
                                <tr>
                                    <td>
                                        <input
                                            id="qualificationName"
                                            type="text"
                                            name="qualificationName"
                                            value={this.state.qualification.name}
                                            onChange={(e) => {this.onChangeQualificationName(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="qualificationDate"
                                            type="text"
                                            name="qualificationDate"
                                            value={this.state.qualification.date}
                                            onChange={(e) => {this.onChangeQualificationDate(e)}}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            id="qualificationPdf"
                                            type="text"
                                            name="qualificationPdf"
                                            value={this.state.qualification.pdf}
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