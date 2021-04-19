import React from 'react';
import './App.css';
import NavigationBar from "./NavigationBar.js"
import VerifiedBadge from "./images/verified-badge.png"
import QualifiedBadge from "./images/qualified-badge.png"

function Search() {

    function sendToPage(link) {
        window.location.href = link;
    }

    function clearFilters() {

    }

    return (
        <React.Fragment>
            <NavigationBar />
            <div className="SearchBody">
                <div className="SearchBodyLeft">
                    <div className="SearchBodyLeftHeader">
                        <p style={{fontWeight: "bold"}}>Filters</p>
                        <p id="clearAllButton">Clear all</p>
                    </div>
                    <div className="SearchBodyLeftLine"></div>
                    <div className="SearchBodyLeftContent">
                        <div className="SearchBodyLeftContentHeader">
                            <p style={{fontWeight: "bold"}}>Services</p>
                            <p id="clearServicesButton">Clear</p>
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
                            <p id="clearLocationButton">Clear</p>
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
                            <p id="clearTypeButton">Clear</p>
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
                            <p id="clearEmployeesButton">Clear</p>
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
                            <p id="clearVerificationsButton">Clear</p>
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
                    <div className="SearchBodyRightContent">
                        <div className="SearchResults">
                            <img className="SearchResultsLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"></img>
                            <div className="SearchResultsInfo">
                                <p id="SearchResultsInfoName">SP Name</p>
                                <p id="SearchResultsInfoLocation">SP Location</p>
                                <p id="SearchResultsInfoService">SP Service</p>
                                <div className="SearchResultsInfoBadges">
                                    <img className="SearchResultsInfoBadge" src={VerifiedBadge}></img>
                                    <img className="SearchResultsInfoBadge" src={QualifiedBadge}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SearchBodyRightContent">
                        <div className="SearchResults">
                            <img className="SearchResultsLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"></img>
                            <div className="SearchResultsInfo">
                                <p id="SearchResultsInfoName">SP Name</p>
                                <p id="SearchResultsInfoLocation">SP Location</p>
                                <p id="SearchResultsInfoService">SP Service</p>
                                <div className="SearchResultsInfoBadges">
                                    <img className="SearchResultsInfoBadge" src={VerifiedBadge}></img>
                                    <img className="SearchResultsInfoBadge" src={QualifiedBadge}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="SearchBodyRightContent">
                        <div className="SearchResults">
                            <img className="SearchResultsLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"></img>
                            <div className="SearchResultsInfo">
                                <p id="SearchResultsInfoName">SP Name</p>
                                <p id="SearchResultsInfoLocation">SP Location</p>
                                <p id="SearchResultsInfoService">SP Service</p>
                                <div className="SearchResultsInfoBadges">
                                    <img className="SearchResultsInfoBadge" src={VerifiedBadge}></img>
                                    <img className="SearchResultsInfoBadge" src={QualifiedBadge}></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )    
}

export default Search;