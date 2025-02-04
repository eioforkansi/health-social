import { MoreVert } from "@material-ui/icons";
import "./Post.css";
import { Users } from "../../dummyData";
import { useState } from "react";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLike, setIsLike] = useState(false);
  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };

  return (
    <div className="post">
      <div className="post-wrapper">
        <div className="post-top">
          <div className="top-left">
            <img
              src={
                Users.filter((user) => user.id === post.userId)[0]
                  .profilePicture
              }
              alt=""
              className="post-profile"
            />
            <span className="post-username">
              {Users.filter((user) => user.id === post.userId)[0].username}
            </span>
            <span className="post-date">{post.date}</span>
          </div>
          <div className="top-right">
            <MoreVert />
          </div>
        </div>
        <div className="post-center">
          <span className="post-text">{post.desc}</span>
          <img src={post.photo} alt="" className="post-image" />
        </div>
        <div className="post-bottom">
          <div className="bottom-left">
            <img
              className="like-icon"
              src={"/assets/like.png"}
              onClick={likeHandler}
              alt=""
            />
            <img
              className="like-icon"
              src="/assets/heart.png"
              onClick={likeHandler}
              alt=""
            />
            <span className="like-counter">{like} people likes it</span>
          </div>
          <div className="bottom-right">
            <span className="comment-text">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
