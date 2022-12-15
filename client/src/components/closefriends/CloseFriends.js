import React from 'react'
import './closeFriends.css'

const CloseFriends = ({user}) => {
  return (
    <li className="sideBarFriends">
    <img src={user.profilePicture} alt="friends" className="sidebarFriendsImg" />
    <span className="sidebarFriendname">{user.username}</span>
  </li>
  )
}

export default  CloseFriends


