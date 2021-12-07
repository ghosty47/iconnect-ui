import { MoreVert } from '@material-ui/icons'
import './post.css'

const Post = () => {
  return (
    <div className="post" >
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="/assets/person/9.jpeg" alt="" className="postProfileImg" />
            <span className="postUsername">Usoroh</span>
            <span className="postDate">2 mins ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert className="postTopRightIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">This is my first post</span>
          <img src="assets/post/10.jpeg" alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="assets/like.png" alt="" className='likeIcon' />
            <img src="assets/heart.png" alt="" className="likeIcon" />
            <span className="postLikeCounter">12 people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">Comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post
