import React from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";

const PostContainer = ({
  posts,
  toggleLike,
  changeHandlerNested,
  addNewComment
}) => {
  return (
    <section className="post-container">
      {posts.map(post => (
        <Post
          key={post.timestamp}
          post={post}
          toggleLike={toggleLike}
          newCommentText={post.newCommentText}
          changeHandlerNested={changeHandlerNested}
          addNewComment={addNewComment}
        />
      ))}
    </section>
  );
};

// Since I check the array contents in Post.js, no need to check here:
PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
