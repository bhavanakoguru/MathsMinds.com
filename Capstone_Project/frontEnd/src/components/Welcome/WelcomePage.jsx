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
        </div>
        <div>
            <img src="https://kalvium.community/images/home_hero.gif" alt="Description of the image" className="welcome"/>
            <div className="welcomeText">
                <p>Welcome to the fun place, where all of the learning and magic happens! Enjoy the journey while you're here.</p>
                <p>To get started with learning the courses, <a href="">hop on to Livebooks.</a></p>
                <img src="https://www.educationalappstore.com/images/uploads/2019/04/math-apps-for-adults-750x350.jpg" alt="welcomepageimage" className="mathimage"/>
                <p className="paragraph">
                    Mathematics is a fascinating subject that holds endless inspiration. It's all about numbers, shapes, and solving problems. <br />
                    Patterns and symmetries make it beautiful, while puzzles challenge and excite us. Math is everywhere, from nature's design to <br />
                    real-world applications. Learning about famous mathematicians and their achievements motivates us to explore and create our own<br />
                    math journey. With math, we can uncover hidden connections, unleash creativity, and find beauty in simplicity.
                </p>
            </div>
        </div>
        
        </div>
    )
}
export default Welcome;
