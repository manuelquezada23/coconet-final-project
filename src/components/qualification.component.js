import React, { Component } from "react";
import AuthService from "../services/auth.service";
import '../App.css';
import NavigationBar from "../NavigationBar.js"

export default class SP extends Component {
    constructor(props) {
      super(props);
      this.getTutorial = this.getTutorial.bind(this);
      this.state = {
        currentTutorial: {
          username: "",
          email: ""
        },
        projects: [], 
        message: ""
      };
    }
  
    componentDidMount() {
        this.getTutorial(this.props.match.params.id);
        this.addCurrentProjects();
    }

    addCurrentProjects() {

      AuthService.get_q(this.props.match.params.id)
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

    sendToPage(link) {
      window.location.href = link;
    }
  
    render() {
        const { currentTutorial, projects } = this.state;

        return (
            <React.Fragment>
            <NavigationBar />
            <div className="SPTopBar">
            <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}`)}}>About</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/projects`)}}>Projects</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/previous-clients`)}}>Previous Clients</h3>
                    <h3 style={{color: "#F2C70F"}} className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/qualifications`)}}>Qualifications</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/licenses-and-certifications`)}}>Licenses & Certifications</h3>
                    <h3 className="SPSideBarBox" onClick={() => {this.sendToPage(`/sp/${currentTutorial.id}/contact`)}}>Contact</h3>
            </div>
            <table className="SPQualificationsTable" >
                <colgroup>
                    <col span="1" style={{width: "30%"}}></col>
                    <col span="1" style={{width: "15%"}}></col>
                    <col span="1" style={{width: "20%"}}></col>
                </colgroup>
                <tr>
                    <th>Qualification</th>
                    <th>Date</th>
                    <th>Document</th>
                </tr>
                {projects &&
                        projects.map((user, index) => (
                            <tr id={user.id}>
                            <td>
                                {user.name}
                            </td>
                            <td>
                                {user.date}
                                   
                            </td>
                            <td>
                                {user.pdf}
                            </td>
                        </tr>
                      ))}
            </table>
        </React.Fragment>
        )
    }
  }