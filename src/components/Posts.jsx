import { useState } from "react";
import userData from "./data/userData";

function Posts() {
  const [postData, setPostData] = useState([...userData]);
  const [likeCount, setLikeCount] = useState(
    postData.map((item) => {
      return item.likes;
    })
  );
  const addLike = (index) => {
    const newCount = likeCount[index] + 1;
    const newArr = [...likeCount];
    newArr.splice(index, 1, newCount);
    setLikeCount([...newArr]);
  };

  const disLike = (index) => {
    if (likeCount[index] > 0) {
      const newCount = likeCount[index] - 1;
      const newArr = [...likeCount];
      newArr.splice(index, 1, newCount);
      setLikeCount([...newArr]);
    }
  };
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postData.map((post, i) => {
          return (
            <div className="post-item" key={i}>
              <div className="post-header">
                <h2>{post.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes:</span>
                  <span className="post-likes">{likeCount[i]}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    addLike(i);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    disLike(i);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
