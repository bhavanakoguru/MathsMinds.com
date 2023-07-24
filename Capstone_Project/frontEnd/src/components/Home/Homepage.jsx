import { useDispatch, useSelector } from 'react-redux';
import './Homepage.css';
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { getAllUnits } from '../Redux/ProductReducer/Action';
import { useState } from 'react';

function DisplayHome()
{
const dispatch = useDispatch()
const unitData = useSelector(state => state.course.unitData)
console.log(unitData);
useEffect(()=>{
     dispatch(getAllUnits())
 },[])
    const [clickedSubject, setClickedSubject] = useState(null); // Store the clicked subject
    /*S*/
    const [search,setSearch]=useState("")

  function handleSubjectClick(subject) {
    setClickedSubject(subject);
  }
  
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
                            {/* {
                                homeSub.map((item,index)=>(
                                    <div key={index}> 
                                        {
                                            item.text
                                        }
                                    </div>
                                ))
                            } */}                            
                            <div onClick={()=> handleSubjectClick('Mathematics')} id='math'>Mathematics</div>
                            <div>Importance of Mathematics</div>
                            <div>Milestones in Mathematics</div>
                            <div>Mathematical Universality</div>
                            <div>Mathematics Gamification</div>
                            <div>Mathematical Problem-Solving</div>
                        </div>
                        <div className="displayUnits">
                             <div style={{paddingTop:'10px',marginLeft:'880px',marginBottom:'10px',border:'1px solid black'}} className='searchBox'>
                                <img src='https://www.clker.com/cliparts/g/Y/P/o/h/U/search-logo.svg' alt='search' className='search'/>
                                <input placeholder="Search Here" onChange={(e)=>{setSearch(e.target.value)}} style={{padding:'10px',border:'none',outline:'none'}} />
                            </div>
                             {  
                                clickedSubject === 'Mathematics' ? (unitData.filter((item)=>{
                                    if(item.unit_Name.toLowerCase().includes(search.toLocaleLowerCase())){
                                        return item;
                                    }

                                }).map(({ unit_Name }) => (
                                    <div className='units'>
                                            <div className="rambus">
                                                <img src="/resources/Rhombus.png" alt="" className="rambusimg" />
                                            </div>
                                            <div className="unitContent">
                                                <h2 key={unit_Name}>{unit_Name}</h2>
                                            </div>
                                            <div className="dropdown">
                                                <img src="/resources/downarrow.png" alt="" className="dropdownimg" />
                                            </div>
                                    </div>
                                ))
                                ) : (
                                <>
                                    <img src="/resources/miccymouse.svg" alt="mouse" className="mouse" />
                                    <h1 className="mouse1">WELCOME</h1>
                                </>)
                            }
                        </div> 
                </div>
            </div>
        </div>
    </>)
}
export default DisplayHome
