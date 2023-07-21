import React from "react";
import {Route,Routes} from "react-router";
import DisplayHome from "../Home/Homepage.jsx";
import DisplayProfile from "../Profile/profile.jsx";
import Welcome from "../Welcome/WelcomePage";
function Routing() {
    return (
      <div>
          <Routes>
            <Route path="/home" Component={DisplayHome}/>
            <Route path="/welcome" Component={Welcome}/>
            <Route path="/profile" Component={DisplayProfile}/>
          </Routes>
  
      </div> 
    )
  }
  export default Routing;
  