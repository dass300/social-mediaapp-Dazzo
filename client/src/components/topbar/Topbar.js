import React from "react";
import "./Topbar.css";
import {Link} from 'react-router-dom'

import { Search, Person, Chat, Notifications } from "@mui/icons-material";


function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  
  
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <Link to="/" style =  {{textDecoration:"none"}} >
        <span className="logo">Dazzo</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            type="text"
            className="searchinput"
            placeholder="Search for friends,posts,vedios..."
          />
        </div>
      </div>

      <div className="topbarRight">

        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>

        <div className="topbarIcons">

          <div className="topbarIconItems">
            <Person />
            <span className="topbarIconBadge">3</span>
          </div>

          <div className="topbarIconItems">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>

          <div className="topbarIconItems">
            <Notifications />
            <span className="topbarIconBadge">5</span>
          </div>

        </div>
              
        <img src= {`${PF}person/1.jpeg`} alt="person1" className="topbarImg" />
     
      </div>

    </div>
  );
}

export default Topbar;
