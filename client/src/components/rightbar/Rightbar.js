import React from 'react'
import './rightbar.css'
import {Users} from "../../dummyData"
import Online from '../online/Online'


function Rightbar({profile}) {

  const HomeRightBar = ()=>{
    return(
      <React.Fragment>
        <div className="birthdayContainer">
        <img src="assets/gift.png" alt="gift" className="birthdayImg" />
        <span className="birthdayText">
        <b>Pola Foster</b>and<b> 3 other friends</b> have a birthday today.
        </span>      
      </div>
      <img src="assets/ad.png" alt="ad" className="rightbarAd" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFrindsList">

      {Users.map(u=>(
        <Online key = {u.id} user = {u} />
      ))}
      </ul>
      </React.Fragment>
    )
  }

  const ProfileRightBar = ()=>{
    return(
      <>
      <h4 className="rightbarTitle">User Information</h4>
      <div className="rightbarInfo">

        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">City:</span>
          <span className="rightbarInforValue">New York</span>
        </div>

        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">From:</span>
          <span className="rightbarInforValue">lulumba</span>
        </div>

        <div className="rightbarInforItem">
          <span className="rightbarInfoKey">Relationship:</span>
          <span className="rightbarInforValue">Single</span>
        </div>
      </div>
      <h4 className="rightbarTitle">User Friends</h4>
      <div className="rightbarFollowings">

        <div className="rightbarFollowing">
          <img src="./assets/person/1.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        <div className="rightbarFollowing">
          <img src="./assets/person/2.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        <div className="rightbarFollowing">
          <img src="./assets/person/3.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        <div className="rightbarFollowing">
          <img src="./assets/person/4.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        <div className="rightbarFollowing">
          <img src="./assets/person/5.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        <div className="rightbarFollowing">
          <img src="./assets/person/6.jpeg" alt="" className="rightbarfollowingImg" />
          <span className="rightbarfollowingName">jumanji</span>
        </div>
        


      </div>
      </>
    )
  }
  return (
    <div className='rightbar'>
     <div className="rightBarWrapper">
      
{profile ? <ProfileRightBar/> :<HomeRightBar/>}
     </div>
      </div>
  )
}

export default Rightbar