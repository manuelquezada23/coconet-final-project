import React from "react";
import NavigationBar from "./NavigationBar.js"
import './App.css';
import BrowseIcon from "./images/browseIcon.png"
import FindIcon from "./images/findIcon.png"
import WorkIcon from "./images/workIcon.png"
import EmailIcon from "./images/emailIcon.png"

function AboutUs() {
    function sendToPage(link) {
        window.location.href = link;
    }
    return (
        <React.Fragment>
            <NavigationBar />
            <div className="AboutBody">
                <h1 className="AboutColumnTitle">What It Is</h1>
                <div className="AboutColumns">
                    <div className="AboutColumnOne">
                        <img className="AboutColumnIcon" src={BrowseIcon}></img>
                        <h3><span style={{color: "#F2C70F"}}>Browse</span> for qualified service providers that you think will be helpful for your project.</h3>
                    </div>
                    <div className="AboutColumnTwo">
                        <img className="AboutColumnIcon" src={FindIcon}></img>
                        <h3><span style={{color: "#F2C70F"}}>Find</span> the correct and best qualified service provider for your project.</h3>
                    </div>
                    <div className="AboutColumnThree">
                        <img className="AboutColumnIcon" src={WorkIcon}></img>
                        <h3><span style={{color: "#F2C70F"}}>Work</span> with qualified service providers and make your project a success!</h3>
                    </div>
                </div>
                <h1 className="AboutColumnTitle">How It Works</h1>
                <div className="AboutColumnsB">
                    <div className="AboutColumnOneB">
                        <h2 className="AboutColumnSubtitle">Users</h2>
                        <p onClick={() => {sendToPage("/signup")}} style={{cursor: "pointer"}}>1. <span style={{fontWeight: "bold"}}>Register</span> now!</p>
                        <p>2. Create a profile that fit your needs!</p>
                        <p>3. Browse, find, and work with qualified service providers!</p>
                    </div>
                    <div className="AboutColumnTwoB">
                        <h2 className="AboutColumnSubtitle">Service Providers</h2>
                        <p onClick={() => {sendToPage("/signup-service-provider")}} style={{cursor: "pointer"}}>1. <span style={{fontWeight: "bold"}}>Register</span> now!</p>
                        <p>2. Create a profile</p>
                        <p>3. If you want to get qualified, send us your documents and we'll review them!</p>
                    </div>
                </div>
                <h1 className="AboutColumnTitle">Have more questions?</h1>
                <a href="mailto:jaime_matos@brown.edu" style={{textDecoration: "none"}}>
                    <img className="AboutContact" src={EmailIcon}></img>
                </a>
            </div>
        </React.Fragment>
    )    
}

export default AboutUs;