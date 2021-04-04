import React from "react";
import NavigationBar from "./NavigationBar.js"
import './App.css';
// import Design from "./images/design-icon.jpeg";
// import Construction from "./images/construction-icon.jpeg";
// import Qualification from "./images/qualification-icon.jpeg";
// import Maintenance from "./images/maintenance-icon.jpeg";
// import Installation from "./images/installation-icon.jpeg";

function Home() {
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="homeBody">
                <h1 className="homeHeadingText"><strong>Find Qualified Service Providers<br/>for your project.</strong></h1>
                
                <div className="serviceCategoriesContainer">
                    <div className="serviceCategoryBox" href="">
                        {/* <img className="serviceCategoryIcon" alt="designIcon" src={Design}></img> */}
                        <p className="serviceCategoryName"><strong>Design</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        {/* <img className="serviceCategoryIcon" alt="constructionIcon" src={Construction}></img>  */}
                        <p className="serviceCategoryName"><strong>Construction</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        {/* <img className="serviceCategoryImg" alt="qualificationIcon" src={Qualification}></img> */}
                        <p className="serviceCategoryName"><strong>Qualification</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        {/* <img className="serviceCategoryIcon" alt="maintenanceIcon" src={Maintenance}></img> */}
                        <p className="serviceCategoryName"><strong>Maintenance</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        {/* <img className="serviceCategoryIcon" alt="installationIcon" src={Installation}></img> */}
                        <p className="serviceCategoryName"><strong>Installation</strong></p>
                    </div>
                </div>
                
                <div className="companyCategoriesContainer">
                    <div className="companyCategoryBox" href="">
                        {/* <img className="companyLogo" alt="companyLogo" src={}></img> */}
                        <p className="companyCategoryName"><strong>Buyers</strong></p>
                    </div>
                    <div className="companyCategoryBox" href="">
                        {/* <img className="companyLogo" alt="companyLogo" src={}></img> */}
                        <p className="companyCategoryName"><strong>Sellers</strong></p>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )    
}

export default Home;