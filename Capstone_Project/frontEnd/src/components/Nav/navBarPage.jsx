import React from "react";
import "./navBar.css"

function NavBar()
{
    return(
        <div>
            <div className="nav">
               <img src="/resources/jtd.jpeg" alt="LogoJTD" className="logo" />
                <img src="/resources/booklogo.jpeg" alt="livebook" className="livebook" />
            </div>
        </div>
    )
}
export default NavBar;
