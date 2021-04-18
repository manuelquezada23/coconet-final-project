import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar.js"
import VerifiedBadge from "../images/verified-badge.png"
import QualifiedBadge from "../images/qualified-badge.png"
import SearchIcon from "../images/searchIcon.png"

export default class SP extends Component {
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

    sendToPage(link) {
      window.location.href = link;
    }
  
    render() {
        const { users, currentIndex, searchUsername } = this.state;

        return (
          <React.Fragment>
              <NavigationBar />
              <div id="searchBar">
                <select name="searchValue" id="searchBarDropdown">
                  <option value="serviceProviders">Service Providers</option>
                </select>
                <div id="line"></div>
                <input autocomplete="off" id="searchInputText" type="text" name="email" value={searchUsername} onChange={this.onChangeSearchTitle}/>
                <div id="line2"></div>
                <img id="searchIcon" alt="searchIcon" src={SearchIcon} onClick={this.searchUsername}></img>
              </div>
              <div className="SearchBody">
                  <div className="SearchBodyLeft">
                      <div className="SearchBodyLeftHeader">
                          <p style={{fontWeight: "bold"}}>Filters</p>
                          <p>Clear all</p>
                      </div>
                      <div className="SearchBodyLeftLine"></div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Services</p>
                              <p>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="servicesDropdown">
                                  <option value="servicesValue">Design</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Location</p>
                              <p>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="locationDropdown">
                                  <option value="locationValue">Puerto Rico</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Client Type</p>
                              <p>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="clientTypeDropdown">
                                  <option value="clientTypeValue">Pharmaceuticals</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Employees</p>
                              <p>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="employeesDropdown">
                                  <option value="employeesValue">100+</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Verification & Certifications</p>
                              <p>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <div className="SearchCredentialsDropdown">
                                  <img className="SearchPageBadge" src={VerifiedBadge}></img>
                                  <div className="SearchPageBadgeText">Verified</div>
                                  <img className="SearchPageBadge" src={QualifiedBadge}></img>
                                  <div className="SearchPageBadgeText">Qualified</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="SearchBodyRight">
                    <ul className="list-group">
                      {users &&
                        users.map((user, index) => (
                        <li className="splist">
                          <div className="SearchBodyRightContent">
                            <div className="SearchResults">
                              <img className="SearchResultsLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"></img>
                              <div className="SearchResultsInfo">
                                  <p id="SearchResultsInfoName">{user.name}</p>
                                  <p id="SearchResultsInfoLocation">SP Location</p>
                                  <p id="SearchResultsInfoService">SP Service</p>
                                  <div className="SearchResultsInfoBadges">
                                      <img className="SearchResultsInfoBadge" src={VerifiedBadge}></img>
                                      <img className="SearchResultsInfoBadge" src={QualifiedBadge}></img>
                                  </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                      
                      
                  </div>
              </div>
          </React.Fragment>
      )
    }
  }