import React from 'react'
import Post from '../Post/Post'
import Share from '../Share/Share'
import './feed.css'
import {Posts} from "../../dummyData"

function Feed() {
  return (
    <div className='feed'>
      <div className="feedwrapper">
        <Share/>
        {Posts.map((postData)=>(
          <Post key = {postData.id} post = {postData} />
        ))}
        
      </div>
      </div>
  )
}

export default Feed