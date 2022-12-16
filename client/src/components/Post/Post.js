import React, { useState } from 'react'
import {MoreVert,ThumbUpRounded,FavoriteRounded} from '@mui/icons-material';
import {Users} from "../../dummyData"

import './post.css'

function Post({post}) {

    const [like,setLike] = useState(post.like)
     const [isLiked,setIsLiked] = useState(false)
     const PF = process.env.REACT_APP_PUBLIC_FOLDER

    const likeHandler = ()=>{
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)

    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopleft">
                    <img src={Users.filter((u)=> u.id === post.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUserName">{Users.filter((u)=> u.id === post.userId)[0].username} </span>
                    <span className="postDate">{post.date} </span>
                </div>

                <div className="postTopRight">
                <MoreVert/>
                </div>
            </div>

            <div className="postCenter">
                <span className="postText">{post?.desc} </span>
                <img src={PF+post.photo} alt="" className="postImg" />

            </div>


            <div className="postBottom">
                <div className="postBottomLeft">
                    <ThumbUpRounded htmlColor="DodgerBlue" className="likeIcon" onClick={likeHandler}/>
                    {/* <img src="./assets/like.png" alt="" className="likeIcon" onClick={likeHandler} /> */}
                    <FavoriteRounded htmlColor="Tomato" className="likeIcon" onClick={likeHandler}/>
                    {/* <img src="./assets/heart.png" alt="" className="likeIcon" onClick={likeHandler} /> */}
                    <span className="postLikeCounter">{like} people likes it</span>
                </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment + " "}comments</span>
            </div>
            </div>

        </div>

    </div>
  )
}

export default Post