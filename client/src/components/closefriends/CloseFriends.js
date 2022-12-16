import React from 'react'
import './closeFriends.css'

const CloseFriends = ({user}) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <li className="sideBarFriends">
    <img src={PF + user.profilePicture} alt="friends" className="sidebarFriendsImg" />
    <span className="sidebarFriendname">{user.username}</span>
  </li>
  )
}

export default  CloseFriends


