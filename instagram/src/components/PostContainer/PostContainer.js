import React from "react";
import Post from "../Post/Post";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPostContainerSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
`;

const PostContainer = ({
  posts,
  toggleLike,
  changeHandlerNested,
  addNewComment
}) => {
  return (
    <StyledPostContainerSection>
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
    </StyledPostContainerSection>
  );
};

// Since I check the array contents in Post.js, no need to check here:
PostContainer.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostContainer;
