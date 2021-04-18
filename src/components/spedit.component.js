import React, { Component } from "react";
import '../App.css';
import AuthService from "../services/auth.service";

export default class spedit extends Component {
    constructor(props) {
        super(props);
        //this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeLocation = this.onChangeLocation.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeWebsite = this.onChangeWebsite.bind(this);
        this.onChangeSPtype = this.onChangeSPtype.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeLogo = this.onChangeLogo.bind(this);
        this.getTutorial = this.getTutorial.bind(this);
        this.updateVed = this.updateVed.bind(this);
        this.updateQualified = this.updateQualified.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);

    
        this.state = {
            currentTutorial: {
                id: null,
                name: "",
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
        this.getTutorial(this.props.match.params.id);
    }
    
    onChangeTitle(e) {
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

    onChangePhone(e) {
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

    onChangeSPtype(e) {
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
    
    updateVed(status) {
        var data = {
          id: this.state.currentTutorial.id,
          name: this.state.currentTutorial.name,
          location: this.state.currentTutorial.location,
          website: this.state.currentTutorial.website,
          sptype: this.state.currentTutorial.sptype,
          ved: status,
          qualified: this.state.currentTutorial.qualified,
          description: this.state.currentTutorial.description,
          logo: this.state.currentTutorial.logo
        };
    
        AuthService.sp_update(this.state.currentTutorial.id, data)
          .then(response => {
            this.setState(prevState => ({
              currentTutorial: {
                ...prevState.currentTutorial,
                ved: status
              }
            }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }

    updateQualified(status) {
        var data = {
          id: this.state.currentTutorial.id,
          name: this.state.currentTutorial.name,
          location: this.state.currentTutorial.location,
          website: this.state.currentTutorial.website,
          sptype: this.state.currentTutorial.sptype,
          ved: this.state.currentTutorial.ved,
          qualified: status,
          description: this.state.currentTutorial.description,
          logo: this.state.currentTutorial.logo
        };
    
        AuthService.sp_update(this.state.currentTutorial.id, data)
          .then(response => {
            this.setState(prevState => ({
              currentTutorial: {
                ...prevState.currentTutorial,
                qualified: status
              }
            }));
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    }
    
    updateTutorial() {
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

    sendToPage(link) {
        window.location.href = link;
    }
    
    render() {
        const { currentTutorial } = this.state;
        return (
            <div>
                <div className="edit-form">
                  <h4>Service Provider</h4>
                  <form>
                    <div className="form-group">
                      <label htmlFor="title">Location: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.location}
                        onChange={this.onChangeLocation}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Phone: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.phone}
                        onChange={this.onChangePhone}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Website: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.website}
                        onChange={this.onChangeWebsite}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Service Provider Type: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.sptype}
                        onChange={this.onChangeSPtype}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={currentTutorial.description}
                        onChange={this.onChangeDescription}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="title">Logo: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.logo}
                        onChange={this.onChangeLogo}
                      />
                    </div>
      
                    <div className="form-group">
                      <label>
                        <strong>Verified: </strong>
                      </label>
                      {currentTutorial.ved ? "Verified" : "Verified Pending"}
                    </div>

                    <div className="form-group">
                      <label>
                        <strong>Qualified: </strong>
                      </label>
                      {currentTutorial.qualified ? "Qualified" : "Qualified Pending"}
                    </div>
                  </form>
      
                  {currentTutorial.ved ? (
                    <button
                      className="badge badge-primary mr-2"
                      onClick={() => this.updateVed(false)}
                    >
                      Unverify
                    </button>
                  ) : (
                    <button
                      className="badge badge-primary mr-2"
                      onClick={() => this.updateVed(true)}
                    >
                      Verify
                    </button>
                  )}

                  {currentTutorial.qualified ? (
                    <button
                      className="badge badge-primary mr-2"
                      onClick={() => this.updateQualified(false)}
                    >
                      Unqualify
                    </button>
                  ) : (
                    <button
                      className="badge badge-primary mr-2"
                      onClick={() => this.updateQualified(true)}
                    >
                      Qualify
                    </button>
                  )}
      
                  <button
                    type="submit"
                    className="badge badge-success"
                    onClick={this.updateTutorial}
                  >
                    Update
                  </button>
                  <p>{this.state.message}</p>
                </div>
            </div>
          );
    }
}