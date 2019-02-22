import React from "react";
import PropTypes from "prop-types";
import {
  CommentDiv,
  UsernameComment,
  CommentP
} from "../../myStyledComps/myStyledComps";

const Comment = ({ comment }) => {
  return (
    <CommentDiv>
      <UsernameComment className="username">{comment.username}</UsernameComment>
      <CommentP>{comment.text}</CommentP>
    </CommentDiv>
  );
};

// Checks each comment object's contents:
Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
};

export default Comment;
