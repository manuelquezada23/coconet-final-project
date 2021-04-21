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
      this.handleLocation = this.handleLocation.bind(this);
      this.searchLocation = this.searchLocation.bind(this);
      this.handleService = this.handleService.bind(this);
      this.searchService = this.searchService.bind(this);
      this.settotal = this.settotal.bind(this);
      this.clearLocation = this.clearLocation.bind(this);
      this.clearService = this.clearService.bind(this);
      this.clearAll = this.clearAll.bind(this);
  
      this.state = {
        users: [],
        //currentTutorial: null,
        //currentIndex: -1,
        searchUsername: "",
        location: "",
        service: "",
        totalusers: []
      };
    }
  
    componentDidMount() {
      this.settotal();
      
    }

    filterBender = data => {
      const {searchUsername, location, service} = this.state;
      const words = searchUsername.split(" ");
      let a = false;
      let b = false;
      let c = false;
      let filtered = words.filter(function (e) {
        return e !== "";
      });
      filtered.forEach(e => {
        if(searchUsername && data.name.toLowerCase().includes(e)) {
          a = true;
        }
      });
      if(location && data.location === location) b = true;
      if(service && data.sptype === service) c = true;
      if (searchUsername === ""){
        a = true;
      }
      if (location === ""){
        b = true;
      }
      if (service === ""){
        c = true;
      }
      return true && a && b && c;
    }

    settotal() {
      AuthService.getAll()
        .then(response => {
          this.setState({
            totalusers: response.data
          });
          console.log(response.data);
          if (this.props.match.params.service){
            this.setState({
              service: this.props.match.params.service
            })
          }
          const a = this.state.totalusers.filter(this.filterBender);
          this.setState({users : a});
        })
        .catch(e => {
          console.log(e);
        });
      
    }

    handleLocation(e) {
      const searchTitle = e.target.value;
      this.setState({ location: searchTitle }, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }

    handleService(e) {
      const searchTitle = e.target.value;
      this.setState({ service: searchTitle }, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }

    onChangeSearchTitle(e) {
      const searchTitle = e.target.value;
  
      this.setState({ searchUsername: searchTitle }, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }
  
    retrieveUsers() {
      /*
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
        */
      const a = this.state.totalusers.filter(this.filterBender);
      this.setState({users : a});
    }
  
    refreshList() {
      this.retrieveUsers();
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

    searchLocation() {
      AuthService.getlocation(this.state.location)
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

    searchService() {
      AuthService.getservice(this.state.service)
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

    clearLocation() {
      this.setState({ location: "" }, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }

    clearService() {
      this.setState({ service: "" }, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }

    clearAll() {
      this.setState({ location: "", service: ""}, () => {
        const a = this.state.totalusers.filter(this.filterBender);
        this.setState({users : a});
      });
    }
  
    render() {
        const { users, searchUsername, location, service, totalusers } = this.state;

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
                          <p id="clearTypeButton" onClick={this.clearAll}>Clear All</p>
                      </div>
                      <div className="SearchBodyLeftLine"></div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Services</p>
                              <p id="clearTypeButton" onClick={() => {this.clearService()}}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="locationDropdown" value={service} onChange={this.handleService}>
                                <option value="">Select an option</option>
                                {totalusers.map((option) => (
                                  <option value={option.sptype}>{option.sptype}</option>
                                ))}
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Location</p>
                              <p id="clearTypeButton" onClick={this.clearLocation}>Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <select name="searchValue" id="locationDropdown" value={location} onChange={this.handleLocation}>
                                <option value="">Select an option</option>
                                {totalusers.map((option) => (
                                  <option value={option.location}>{option.location}</option>
                                ))}
                              </select>
                          </div>
                      </div>
                      <div className="SearchBodyLeftContent">
                          <div className="SearchBodyLeftContentHeader">
                              <p style={{fontWeight: "bold"}}>Client Type</p>
                              <p id="clearTypeButton" onClick={() => {}}>Clear</p>
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
                              <p id="clearEmployeesButton" onClick={() => {}}>Clear</p>
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
                              <p id="clearVerificationsButton" >Clear</p>
                          </div>
                          <div className="SearchBodyLeftDropDown">
                              <div className="SearchCredentialsDropdown">
                                  <img className="SearchPageBadge" src={VerifiedBadge} alt="badge" onClick={() => {this.selectVerification(document.getElementById("verifiedText"))}}></img>
                                  <div id="verifiedText" className="SearchPageBadgeText">Verified</div>
                                  <img className="SearchPageBadge" src={QualifiedBadge} alt="badge" onClick={() => {this.selectVerification(document.getElementById("qualifiedText"))}}></img>
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
                              <img alt="SearchResultsLogo" className="SearchResultsLogo" src={user.logo}></img>
                              <div className="SearchResultsInfo">
                                  <Link id="SearchResultsInfoName" onClick={() => {this.sendToPage(`/sp/${user.id}`)}}>{user.name}</Link>
                                  <p id="SearchResultsInfoLocation">{user.location}</p>
                                  <p id="SearchResultsInfoService">{user.sptype}</p>
                                  <div className="SearchResultsInfoBadges">
                                    <div style={{ display: user.ved ? "inline" : "none"}}>
                                      <img alt="service-provider-verifiedbadge" className="SPBadge" src={VerifiedBadge}></img>
                                    </div>
                                    <div style={{ display: user.qualified ? "inline" : "none"}}>
                                      <img alt="service-provider-qualifiedbadge" className="SPBadge" src={QualifiedBadge}></img>
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