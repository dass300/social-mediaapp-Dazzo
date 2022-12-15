import React from "react";
import "./Topbar.css";

import { Search, Person, Chat, Notifications } from "@mui/icons-material";

function Topbar() {
  return (
    <div className="topbarContainer">

      <div className="topbarLeft">
        <span className="logo">Dazzo</span>
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
              
        <img src="./assets/person/1.jpeg" alt="person1" className="topbarImg" />
     
      </div>

    </div>
  );
}

export default Topbar;
