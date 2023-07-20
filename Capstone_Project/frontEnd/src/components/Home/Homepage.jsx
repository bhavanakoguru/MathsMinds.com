import './Homepage.css';
import {Link} from "react-router-dom";

function DisplayHome()
{
    return(<>
        <div className="totalPage">
            <div className="nav">
               <Link to="/welcome"><img src="/resources/jtd.jpeg" alt="LogoJTD" className="logo" /></Link> 
               <img src="/resources/booklive.jpeg" alt="livebook" className="livebook" />
                <img src="/resources/booklogo.jpeg" alt="livebook" className="livebook" />
                <Link to="/profile"><img src="/resources/profile.webp" alt="Profile" className="profile"/></Link>
            </div>
            <div className="container">
                <div className="introduction">
                        <div className="textmove">
                            <h1 >Learn the ways of the future</h1>
                            <p >Improve your <span className="maths">Mathematical learningskills</span> here is the ways to enrich your Mathematical life</p>
                        </div>
                        <div className="liveHeros">
                            <img src="/resources/herokalvium.svg" alt="LivebookHeroImg" />
                        </div>
                </div>
                    <div className="containerStore">
                        <div className='subjects'>
                            <div>Mathematics</div>
                            <div>Importance of Mathematics</div>
                            <div>Milestones in Mathematics</div>
                            <div>Mathematical Universality</div>
                            <div>Mathematics Gamification</div>
                            <div>Mathematical Problem-Solving</div>
                        </div>
                        <div>
                            <img src="/resources/miccymouse.svg" alt="mouse" className="mouse"/><h1 className="mouse1">WELCOME</h1>
                        </div> 
                </div>
                <div className="footer">
                    <div className="heart">Made For<img src="https://kalvium.community/images/heart_icon.svg" alt="heart" />STUDENTS</div>
                </div>
            </div>
        </div>
    </>)
}
export default DisplayHome
