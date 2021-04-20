import React, { Component } from "react";
import '../App.css';
import AuthService from "../services/auth.service";

export default class spedit extends Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.getTutorial = this.getTutorial.bind(this);
        this.updateTutorial = this.updateTutorial.bind(this);

    
        this.state = {
            currentTutorial: {
                id: null,
                name: "",
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
    
    updateTutorial() {
        AuthService.update(
          this.state.currentTutorial.id,
          this.state.currentTutorial
        )
          .then(response => {
            console.log(response.data);
            this.setState({
              message: "The User was updated successfully!"
            });
          })
          .catch(e => {
            console.log(e);
          });
        this.sendToPage(`/${this.state.currentTutorial.id}/settings-profile`);
    }

    sendToPage(link) {
        window.location.href = link;
    }
    
    render() {
        const { currentTutorial } = this.state;
        return (
            <div>
                <div className="edit-form">
                  <h4>User</h4>
                  <form>
                    <div className="form-group">
                      <label htmlFor="title">Username: </label>
                      <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={currentTutorial.name}
                        onChange={this.onChangeTitle}
                      />
                    </div>
                  </form>
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