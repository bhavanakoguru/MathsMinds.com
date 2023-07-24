import React from "react";
import {Route,Routes} from "react-router";
import DisplayHome from "../Home/Homepage.jsx";
import DisplayProfile from "../Profile/profile.jsx";
import Welcome from "../Welcome/WelcomePage";
import NavBar from "../Nav/navBarPage.jsx";
import DisplayFooter from "../Footer/footer.jsx";
function Routing() {
    return (
      <div>
        {/* <NavBar /> */}
          <Routes> 
            <Route path="/home" Component={DisplayHome}/>
            <Route path="/welcome" Component={Welcome}/>
            <Route path="/profile" Component={DisplayProfile}/>
          </Routes>
        <DisplayFooter />
  
      </div> 
    )
  }
  export default Routing;
  