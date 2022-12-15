import React from 'react'
import './sidebar.css'
import {RssFeed ,Chat,OndemandVideo,Groups,Bookmark,HelpOutline,Work,Event,School } from "@mui/icons-material"
import {Users} from "../../dummyData"
import CloseFriends from '../closefriends/CloseFriends'

function Sidebar() {
  return (
    <div className='sidebar'>
    <div className="sideBarWrapper">

      <ul className="sidebarList">

        <li className="sidebarListItems">
          <RssFeed className='sidebarIcon' />
          <span className="sidebarListItemText">Feed</span>
        </li>

        <li className="sidebarListItems">
          <Chat className='sidebarIcon' />
          <span className="sidebarListItemText">Chats</span>
        </li>

        <li className="sidebarListItems">
          <OndemandVideo className='sidebarIcon' />
          <span className="sidebarListItemText">Videos</span>
        </li>

        <li className="sidebarListItems">
          <Groups className='sidebarIcon' />
          <span className="sidebarListItemText">Groups</span>
        </li>
      
        <li className="sidebarListItems">
          <Bookmark className='sidebarIcon' />
          <span className="sidebarListItemText">Bookmarks</span>
        </li>

        <li className="sidebarListItems">
          <HelpOutline className='sidebarIcon' />
          <span className="sidebarListItemText">Questions</span>
        </li>

        <li className="sidebarListItems">
          <Work className='sidebarIcon' />
          <span className="sidebarListItemText">Jobs</span>
        </li>

        <li className="sidebarListItems">
          <Event className='sidebarIcon' />
          <span className="sidebarListItemText">Events</span>
        </li>

        <li className="sidebarListItems">
          <School className='sidebarIcon' />
          <span className="sidebarListItemText">Courses</span>
        </li>
        
      </ul>
      <button className="sidebarButton">Show More</button>
      <hr className="sidebarhr" />
      <ul className="sidebarFriendList">

      {Users.map(u=>(
        <CloseFriends key = {u.id} user = {u} />
      ))}
        

      </ul>
    </div>
    </div>    
  )
}

export default Sidebar