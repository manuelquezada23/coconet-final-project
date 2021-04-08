import React from "react";
import './App.css';
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
                    <a className="serviceCategoryBox" href="http://google.com">
                            <img className="serviceCategoryIcon" alt="designIcon" src="https://static.thenounproject.com/png/75540-200.png"/>
                        <p className="serviceCategoryName"><strong>Design</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="http://google.com">
                            <img className="serviceCategoryIcon" alt="constructionIcon" src="https://www.freeiconspng.com/thumbs/building-icon/office-building-icon-32.png"/>
                        <p className="serviceCategoryName"><strong>Construction</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="http://google.com">
                            <img className="serviceCategoryIcon" alt="qualificationIcon" src="https://www.pngarts.com/files/11/Qualification-Ribbon-PNG-Image-Background.png"/>
                        <p className="serviceCategoryName"><strong>Qualification</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="http://google.com">
                            <img className="serviceCategoryIcon" alt="maintenanceIcon" src="https://www.pngkey.com/png/full/436-4368638_tools-transparent-tools-icon-png.png"/>
                        <p className="serviceCategoryName"><strong>Maintenance</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="http://google.com">
                            <img className="serviceCategoryIcon" alt="installationIcon" src="https://image.flaticon.com/icons/png/512/81/81020.png"/>
                        <p className="serviceCategoryName"><strong>Installation</strong></p>
                    </a>
                </div>
                
                <div className="companyCategoriesContainer">
                    <div className="companyCategoryBox">
                        <button className="arrowButton" onClick={() => {}}>
                            <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                        </button>
                        <div className="currentCompanyBox" href="google.com">
                            <a href="/service-provider_id/about">
                                <img className="companyLogo" alt="companyLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"/>
                            </a>
                            <p className="companyCategoryName"><strong>Buyers</strong></p>
                        </div>
                        <button className="arrowButton" onClick={() => {}}>
                            <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                        </button>
                    </div>
                    <div className="companyCategoryBox">
                        <button className="arrowButton" onClick={() => {}}>
                            <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                        </button>
                        <div className="currentCompanyBox">
                            <a href="/service-provider_id/about">
                                <img className="companyLogo" alt="companyLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"/>
                            </a>
                            <p className="companyCategoryName"><strong>Sellers</strong></p>
                        </div>
                        <button className="arrowButton" onClick={() => {}}>
                            <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                        </button>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )    
}

export default Home;