import React, { Component } from "react";
import AuthService from "./../services/auth.service";
import { Link } from "react-router-dom";

export default class Search extends Component {
    constructor(props) {
      super(props);
      this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
      this.retrieveUsers = this.retrieveUsers.bind(this);
      this.refreshList = this.refreshList.bind(this);
      this.searchUsername = this.searchUsername.bind(this);
  
      this.state = {
        users: [],
        //currentTutorial: null,
        currentIndex: -1,
        searchUsername: ""
      };
    }
  
    componentDidMount() {
      this.retrieveUsers();
    }
  
    onChangeSearchTitle(e) {
      const searchTitle = e.target.value;
  
      this.setState({
        searchUsername: searchTitle
      });
    }
  
    retrieveUsers() {
        AuthService.getAll()
        .then(response => {
          this.setState({
            users: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    refreshList() {
      this.retrieveUsers();
      this.setState({ currentIndex: -1});
    }
  
    searchUsername() {
      AuthService.findByTitle(this.state.searchUsername)
        .then(response => {
          this.setState({
            users: response.data
          });
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  
    render() {
        const { users, currentIndex, searchUsername } = this.state;

        return (
          <div className="list row">
            <div className="col-md-8">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search by Name"
                  value={searchUsername}
                  onChange={this.onChangeSearchTitle}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={this.searchUsername}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h4>Tutorials List</h4>
    
              <ul className="list-group">
                {users &&
                  users.map((tutorial, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      key={index}
                    >
                      {tutorial.username}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        );
    }
  }