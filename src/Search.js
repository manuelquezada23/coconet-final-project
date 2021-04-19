import React, { Component } from "react";
import AuthService from "./services/auth.service";
import { Link } from "react-router-dom";
import NavigationBar from "./NavigationBar.js"
import VerifiedBadge from "./images/verified-badge.png"
import QualifiedBadge from "./images/qualified-badge.png"
import SearchIcon from "./images/searchIcon.png"

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
        //currentIndex: -1,
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
      this.searchUsername();
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

    clearDropDown(dropdown) {
        dropdown.value = "select"
    }

    clearAllFilters() {
        document.getElementById("servicesDropdown").value = "select"
        document.getElementById("locationDropdown").value = "select"
        document.getElementById("clientTypeDropdown").value = "select"
        document.getElementById("employeesDropdown").value = "select"
        document.getElementById("verifiedText").style.color = "black"
        document.getElementById("qualifiedText").style.color = "black"
    }

    selectVerification(element) {
        element.style.color = "#F2C70F"
    }

    clearVerifications() {
        document.getElementById("verifiedText").style.color = "black"
        document.getElementById("qualifiedText").style.color = "black"
    }
  
    render() {
        const { users, searchUsername } = this.state;

        return (
          <React.Fragment>
              <NavigationBar />
              <div id="searchBar">
                <select name="searchValue" id="searchBarDropdown">
                  <option value="serviceProviders">Service Providers</option>
                </select>
                <div id="line"></div>
                <input autoComplete="off" id="searchInputText" type="text" name="email" value={searchUsername} onChange={this.onChangeSearchTitle}/>
                <div id="line2"></div>
                <img id="searchIcon" alt="searchIcon" src={SearchIcon} onClick={this.searchUsername}></img>
              </div>
              <div className="SearchBody">
                  <div className="SearchBodyLeft">
                      <div className="SearchBodyLeftHeader">
                          <p style={{fontWeight: "bold"}}>Filters</p>
                          <p id="clearAllButton" onClick={this.clearAllFilters}>Clear all</p>
                      </div>
                      <div className="SearchBodyLeftLine"></div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Services</p>
                              <p id="clearServicesButton" onClick={() => {this.clearDropDown(document.getElementById("servicesDropdown"))}}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="servicesDropdown">
                                  <option value="select">Select an option</option>
                                  <option value="servicesValue">Design</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Location</p>
                              <p id="clearLocationButton" onClick={() => {this.clearDropDown(document.getElementById("locationDropdown"))}}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="locationDropdown">
                                <option value="select">Select an option</option>
                                  <option value="locationValue">Puerto Rico</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Client Type</p>
                              <p id="clearTypeButton" onClick={() => {this.clearDropDown(document.getElementById("clientTypeDropdown"))}}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="clientTypeDropdown">
                                <option value="select">Select an option</option>
                                  <option value="clientTypeValue">Pharmaceuticals</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Employees</p>
                              <p id="clearEmployeesButton" onClick={() => {this.clearDropDown(document.getElementById("employeesDropdown"))}}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="employeesDropdown">
                                <option value="select">Select an option</option>
                                  <option value="employeesValue">100+</option>
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Verification & Certifications</p>
                              <p id="clearVerificationsButton" onClick={this.clearVerifications}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <div className="SearchCredentialsDropdown">
                                  <img className="SearchPageBadge" src={VerifiedBadge} onClick={() => {this.selectVerification(document.getElementById("verifiedText"))}}></img>
                                  <div id="verifiedText" className="SearchPageBadgeText">Verified</div>
                                  <img className="SearchPageBadge" src={QualifiedBadge} onClick={() => {this.selectVerification(document.getElementById("qualifiedText"))}}></img>
                                  <div id="qualifiedText" className="SearchPageBadgeText">Qualified</div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="SearchBodyRight">
                    <ul className="list-group">
                      {users &&
                        users.map((user, index) => (
                        <li className="splist" key={user.id}>
                          <div className="SearchBodyRightContent">
                            <div className="SearchResults">
                              <img className="SearchResultsLogo" src={user.logo}></img>
                              <div className="SearchResultsInfo">
                                  <Link id="SearchResultsInfoName" onClick={() => {this.sendToPage(`/sp/${user.id}`)}}>{user.name}</Link>
                                  <p id="SearchResultsInfoLocation">{user.location}</p>
                                  <p id="SearchResultsInfoService">{user.sptype}</p>
                                  <div className="SearchResultsInfoBadges">
                                    <div style={{ display: user.ved ? "inline" : "none"}}>
                                      <img className="SPBadge" src={VerifiedBadge}></img>
                                    </div>
                                    <div style={{ display: user.qualified ? "inline" : "none"}}>
                                      <img className="SPBadge" src={QualifiedBadge}></img>
                                    </div>
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