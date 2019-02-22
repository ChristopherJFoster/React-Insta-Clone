import React from "react";
import Comment from "../Comment/Comment";
import PropTypes from "prop-types";
import moment from "moment";
import {
  CommentsDiv,
  Timestamp,
  CommentInput
} from "../../myStyledComps/myStyledComps";

const CommentSection = ({
  comments,
  timestamp,
  newCommentText,
  changeHandlerNested,
  addNewComment
}) => {
  return (
    <CommentsDiv>
      {comments.map((comment, index) => (
        // Used index for key for now - Date.now() wasn't working for some reason:
        <Comment comment={comment} key={index} />
      ))}
      <Timestamp>
        {moment.duration(Date.now() - timestamp).humanize()} ago
      </Timestamp>
      <form onSubmit={e => addNewComment(e, timestamp)}>
        <CommentInput
          name="newCommentText"
          value={newCommentText}
          type="text"
          placeholder="Add a comment..."
          onChange={e => changeHandlerNested(e, timestamp)}
        />
      </form>
    </CommentsDiv>
  );
};

// Since I check the array contents in Comment.js, no need to check here:
CommentSection.propTypes = {
  comments: PropTypes.array.isRequired
};

export default CommentSection;
