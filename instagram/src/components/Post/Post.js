import React from "react";
import CommentSection from "../CommentSection/CommentSection";
import PropTypes from "prop-types";
import {
  PostHeader,
  PostContainer,
  UsernamePost,
  ImageUser,
  ImagePost,
  IconPost,
  IconLike,
  LikeCounter
} from "../../myStyledComps/myStyledComps";

const Post = ({
  post,
  toggleSelectPost,
  toggleLike,
  newCommentText,
  changeHandlerNested,
  addNewComment
}) => {
  return (
    <PostContainer visible={post.visible}>
      <PostHeader>
        <ImageUser src={post.thumbnailUrl} alt="post.thumbnailUrl" />
        <UsernamePost>{post.username}</UsernamePost>
      </PostHeader>
      <ImagePost
        onClick={e => toggleSelectPost(e, post.timestamp)}
        src={post.imageUrl}
        alt={post.imageUrl}
      />
      <IconLike
        onClick={e => toggleLike(e, post.timestamp)}
        // Heart icon is filled (fas) or hollow (far) based on whether the post is liked:
        className={post.liked ? "like fas fa-heart" : "like far fa-heart"}
      />
      <IconPost className="far fa-comment" />
      <LikeCounter>{post.likes} likes</LikeCounter>
      <CommentSection
        comments={post.comments}
        timestamp={post.timestamp}
        newCommentText={newCommentText}
        changeHandlerNested={changeHandlerNested}
        addNewComment={addNewComment}
      />
    </PostContainer>
  );
};

// Checks each post object's contents:
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.number.isRequired,
    comments: PropTypes.array.isRequired
  }).isRequired
};

export default Post;
