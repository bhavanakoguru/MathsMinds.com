import React, { useState } from "react"
import './Homepage.css';
import {Link} from "react-router-dom";

function DisplayHome()
{

    const [start,setStart] = useState(false);

    // function go()
    // {
    //     setStart(!start);
    //     {
    //         if(start)
    //         {
                
    //         }
    //     }
    // }

    const [course,setCourse]=useState([]);
    const [isClick, setIsClick] = useState(false);

    function click()
    {
        setIsClick(!isClick);
        {
            if(isClick)
            {
                fetch(`http://localhost:5000/course`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    setCourse(data)
                })
            }
        }
    }

    const [units,setUnits] = useState([]);
    const [isClickMe,setIsClickMe] = useState([]);

    function clickMe()
    {
        setIsClickMe(!isClickMe)
        {
            if(isClickMe)
            {
                fetch(`http://localhost:5000/units`)
                .then(response=>response.json())
                .then(data =>{
                    console.log(data);
                    setUnits(data)
                })
            }
        }
    }

    const [subunits,setSubunits] = useState([]);
    const [isClicked,setIsClicked] = useState([]);
    function ClickMeOnce() {
        setIsClicked(!isClicked);
        if(isClicked){
            fetch(`http://localhost:5000/Subunits`)
                .then(response => response.json())
                .then(subunitdata => {
                    console.log(subunitdata)
                    setSubunits(subunitdata)
                })
        }
    }
    // function Click() {
    //     setIsClicked(!isClicked);
    //     if(isClicked){
    //         fetch(`http://localhost:5050/Units`)
    //             .then(response => response.json())
    //             .then(subunitdata => {
    //                 console.log(subunitdata)
    //                 setSubunits(subunitdata)
    //             })
    //     }
    // }
    return(<>
        <div className="totalPage">
            <div className="nav">
               <Link to="/welcome"><img src="/resources/jtd.jpeg" alt="LogoJTD" className="logo" /></Link> 
               <img src="/resources/booklive.jpeg" alt="livebook" className="LogoLive livebook" />
                <img src="/resources/booklogo.jpeg" alt="livebook" className="livebook" onClick={()=>click()}/>
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
                start?{
                    <div className="container2">
                    <div className="container2flex">
                            <div className="center">
                                    {
                                        isClick ? 
                                        course.map(({ course_Name }) => 
                                        <div className="leftborder">
                                                <h3 className='course' onClick={()=>clickMe()}>
                                                    {course_Name}
                                                </h3>
                                        </div>)
                                        :""
                                        //  <><img src="/resources/miccymouse.svg" alt="mouse" className="mouse"/><h1 className="mouse1">WELCOME</h1></>
                                    }
                            </div>
                    <div className="unitshow">
                        {
                        isClickMe?
                        units.map(({ unit_Name}) =>
                                <div className="unitmargin">
                                    <div className='units'  onClick={()=>ClickMeOnce()}>
                                        <div className="rambus">
                                            <img src="/resources/Rhombus.png" alt="" className="a" />
                                        </div>
                                        <div className="text">
                                            <div className="c" >
                                                {unit_Name}
                                                {
                                                isClicked ? 
                                                    <div>
                                                        {
                                                            subunits.map(({ subUnit_Name,subUnit_Content}) => <div>
                                                                <div className='subunits' >
                                                                    <div className="circle" ></div>
                                                                    <p>
                                                                        {subUnit_Name}
                                                                    </p>
                                                                </div>
                                                                <p className="content">{subUnit_Content}  </p> 
                                                                
                                                            </div>) 
                                                        }
                                                    </div> : ""
                                                }
                                            </div>
                                        </div>
                                        <div className="dropdown">
                                            <img src="/resources/downarrow.png" alt="" className="b" />
                                        </div>
                                    </div>
                                </div>)
                        :<><img src="/resources/miccymouse.svg" alt="mouse" className="mouse"/><h1 className="mouse1">WELCOME</h1></>
                        }
                    </div>
                    </div>
                </div>
                }:<><img src="/resources/miccymouse.svg" alt="mouse" className="mouse"/><h1 className="mouse1">WELCOME</h1></>
                <div className="footer">
                    <div className="heart">Made For<img src="https://kalvium.community/images/heart_icon.svg" alt="heart" />STUDENTS</div>
                </div>
                
            </div>
        </div>
    </>)
}
export default DisplayHome