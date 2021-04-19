import React from "react";
import NavigationBar from "./NavigationBar.js"
import './App.css';
import LeftArrow from "./images/left-arrow.png";
import RightArrow from "./images/right-arrow.png";
import Background from "./images/home-background.jpeg"

function Home() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="bodyBack">
                <img className="background" alt="homeBackground" src={Background}></img>
            </div>
            <div className="bodyFront">
                <h1 className="bodyHeadingText"><strong>Find Qualified Service Providers<br/>for your project.</strong></h1>
                <h2 style={{paddingTop: "0", marginBottom: "0px", cursor: "pointer"}} onClick={() => {sendToPage("/about")}}>Learn More</h2>
                
                <div className="serviceCategoriesContainer">
                    <a className="serviceCategoryBox" href="/search">
                            <img className="serviceCategoryIcon" alt="designIcon" src="https://static.thenounproject.com/png/75540-200.png"/>
                        <p className="serviceCategoryName"><strong>Design</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="/search">
                            <img className="serviceCategoryIcon" alt="constructionIcon" src="https://www.freeiconspng.com/thumbs/building-icon/office-building-icon-32.png"/>
                        <p className="serviceCategoryName"><strong>Construction</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="/search">
                            <img className="serviceCategoryIcon" alt="qualificationIcon" src="https://www.pngarts.com/files/11/Qualification-Ribbon-PNG-Image-Background.png"/>
                        <p className="serviceCategoryName"><strong>Qualification</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="/search">
                            <img className="serviceCategoryIcon" alt="maintenanceIcon" src="https://www.pngkey.com/png/full/436-4368638_tools-transparent-tools-icon-png.png"/>
                        <p className="serviceCategoryName"><strong>Maintenance</strong></p>
                    </a>

                    <a className="serviceCategoryBox" href="/search">
                            <img className="serviceCategoryIcon" alt="installationIcon" src="https://image.flaticon.com/icons/png/512/81/81020.png"/>
                        <p className="serviceCategoryName"><strong>Installation</strong></p>
                    </a>
                </div>
                
                <div className="companyCategoriesContainer">
                    <div className="companyCategoryBox">
                        <div className="currentCompanyBox" href="google.com">
                            <button className="arrowButton" onClick={() => {}}>
                                <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                            </button>
                            <a href="/service-provider_id/about">
                                <img className="companyLogo" alt="companyLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"/>
                            </a>
                            <button className="arrowButton" onClick={() => {}}>
                                <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                            </button>
                        </div>
                        <p className="companyCategoryName"><strong>Buyers</strong></p>
                    </div>
                    <div className="companyCategoryBox">
                        <div className="currentCompanyBox">
                            <button className="arrowButton" onClick={() => {}}>
                                <img className="arrowImg" alt="leftArrow" src={LeftArrow}/>
                            </button>
                            <a href="/service-provider_id/about">
                                <img className="companyLogo" alt="companyLogo" src="https://livejones.com/wp-content/uploads/2020/05/logo-Placeholder.png"/>
                            </a>
                            <button className="arrowButton" onClick={() => {}}>
                                <img className="arrowImg" alt="rightArrow" src={RightArrow}/>
                            </button>
                        </div>
                        <p className="companyCategoryName"><strong>Sellers</strong></p>
                    </div>
                </div>
            </div>  
        </React.Fragment>
    )    
}

export default Home;