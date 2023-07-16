import React from "react";
import { Link } from "react-router-dom";
import "./WelcomePage.css"
function Welcome()
{
    return(
        <div className="totalPage">
        <div className="nav">
               <img src="/resources/jtd.jpeg" alt="LogoJTD" className="logo" />
               <Link to="/home"><img src="/resources/booklive.jpeg" alt="livebook" className="LogoLive livebook" /></Link>
                {/* <img src="/resources/booklogo.jpeg" alt="livebook" className="livebook" /> */}
        </div>
        <div>
            {/* <img src="WelcomeImg.gif" alt="welcome" /> */}
            <img src="https://kalvium.community/images/home_hero.gif" alt="Description of the image" className="welcome"/>

        </div>
        </div>
    )
}
export default Welcome;