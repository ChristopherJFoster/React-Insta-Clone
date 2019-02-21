import React from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";
import { PostContainerDiv } from "../../myStyledComps/myStyledComps";

const PostContainer = ({
  posts,
  toggleLike,
  changeHandlerNested,
  addNewComment
}) => {
  return (
    <PostContainerDiv>
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
    </PostContainerDiv>
  );
};

// Since I check the array contents in Post.js, no need to check here:
PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
