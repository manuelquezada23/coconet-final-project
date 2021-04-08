import React from "react";
import './App.css';
import PlaceHolder from "./images/placeholder.webp";
// import Design from "./images/design-icon.jpeg";
// import Construction from "./images/construction-icon.jpeg";
// import Qualification from "./images/qualification-icon.jpeg";
// import Maintenance from "./images/maintenance-icon.jpeg";
// import Installation from "./images/installation-icon.jpeg";
import LeftArrow from "./images/left-arrow.png";
import RightArrow from "./images/right-arrow.png";

function Home() {
    return (
        <React.Fragment>
            <div className="bodyBack"></div>
            <div className="bodyFront">
                <h1 className="bodyHeadingText"><strong>Find Qualified Service Providers<br/>for your project.</strong></h1>
                
                <div className="serviceCategoriesContainer">
                    <div className="serviceCategoryBox" href="">
                        <img className="serviceCategoryIcon" alt="designIcon" src={PlaceHolder}/>
                        <p className="serviceCategoryName"><strong>Design</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        <img className="serviceCategoryIcon" alt="constructionIcon" src={PlaceHolder}/>
                        <p className="serviceCategoryName"><strong>Construction</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        <img className="serviceCategoryIcon" alt="qualificationIcon" src={PlaceHolder}/>
                        <p className="serviceCategoryName"><strong>Qualification</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        <img className="serviceCategoryIcon" alt="maintenanceIcon" src={PlaceHolder}/>
                        <p className="serviceCategoryName"><strong>Maintenance</strong></p>
                    </div>

                    <div className="serviceCategoryBox" href="">
                        <img className="serviceCategoryIcon" alt="installationIcon" src={PlaceHolder}/>
                        <p className="serviceCategoryName"><strong>Installation</strong></p>
                    </div>
                </div>
                
                <div className="companyCategoriesContainer">
                    <div className="companyCategoryBox" href="">
                        <button className="arrowButton">
                            <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                        </button>
                        <button className="currentCompanyBox">
                            <img className="companyLogo" alt="companyLogo" src={PlaceHolder}/>
                            <p className="companyCategoryName"><strong>Buyers</strong></p>
                        </button>
                        <button className="arrowButton">
                            <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                        </button>
                    </div>
                    <div className="companyCategoryBox" href="">
                        <button className="arrowButton">
                            <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                        </button>
                        <button className="currentCompanyBox">
                            <img className="companyLogo" alt="companyLogo" src={PlaceHolder}/>
                            <p className="companyCategoryName"><strong>Sellers</strong></p>
                        </button>
                        <button className="arrowButton">
                            <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                        </button>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )    
}

export default Home;