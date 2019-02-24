import styled from "styled-components";

const ContainerDiv = styled.div`
  border-radius: 8px;
  margin: 40px auto 40px auto;
  border: 7px solid #ffd380;
  width: 1200px;
  user-select: none;
`;

const LoginContainerDiv = styled(ContainerDiv)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  .wordmark-login {
    margin: 100px 0;
    width: 80%;
  }
  background: repeating-linear-gradient(
    135deg,
    #ffd380,
    #ffd380 10px,
    #ffffff 10px,
    #ffffff 20px
  );
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid lightgrey;
`;

const StyledLogoSet = styled.div`
  display: flex;
  width: 250px;
  align-items: center;
  margin-left: 30px;
  .logo {
    font-size: 3em;
    padding-right: 25px;
    border-right: 1px solid grey;
    cursor: pointer;
  }
  .wordmark-search-bar {
    margin-left: 25px;
    padding-top: 10px;
    width: 160px;
    height: 40px;
  }
`;

const StyledSearchBox = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  i {
    margin: 1px;
    font-size: 1.6em;
    padding: 0 5px 0 10px;
  }
  .search-input {
    margin: 1px;
    width: 150px;
    font-size: 1.6em;
    border: none;
    padding: 7px 5px 5px 5px;
    user-select: none;
  }
`;

const StyledIconSet = styled.div`
  display: flex;
  justify-content: space-between;
  width: 170px;
  margin: 0 30px 0 80px;
  .icon-searchbar {
    font-size: 3em;
  }
`;

const PostContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  background: repeating-linear-gradient(
    135deg,
    #ffd380,
    #ffd380 10px,
    #ffffff 10px,
    #ffffff 20px
  );
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LoginInput = styled.input`
  margin: 5px;
  padding: 5px 0 6px 10px;
  border-radius: 5px;
  border: 2px inset #ffd380;
  background: lemonchiffon;
  font-size: 2.5em;
`;

const LoginButton = styled.button`
  margin: 5px;
  border-radius: 5px;
  border: 2px outset #ffd380;
  width: 50%;
  height: 37px;
  font-size: 2em;
  background: #ffd380;
`;

const PostHeader = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
`;

// Condditional rendering at the component level:
const PostContainer = styled.section`
  width: 600px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  border: 1px solid lightgrey;
  display: ${post => (post.visible === true ? "inline" : "none")};
  background: white;
`;

const UsernamePost = styled.h3`
  font-size: 1.7em;
  margin-left: 12px;
  font-weight: bold;
`;

const ImageUser = styled.img`
  margin-left: 17px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
`;

const ImagePost = styled.img`
  width: 100%;
`;

const IconPost = styled.i`
  font-size: 2.4em;
  padding: 10px 0 10px 15px;
`;

const IconLike = styled(IconPost)`
  cursor: pointer;
`;

const LikeCounter = styled.h3`
  font-size: 1.5em;
  margin-left: 12px;
  font-weight: bold;
`;

const CommentsDiv = styled.div`
  margin: 12px 12px 0 12px;
`;

const Timestamp = styled.h5`
  color: darkgrey;
  font-size: 1.2em;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgrey;
`;

const CommentInput = styled.input`
  padding-left: 10px;
  width: 100%;
  height: 50px;
  border: none;
  font-size: 1.5em;
`;

const CommentDiv = styled.div`
  display: flex;
  margin-top: 8px;
`;

const UsernameComment = styled.h3`
  font-size: 1.5em;
  margin-left: 0;
  font-weight: bold;
`;

const CommentP = styled.p`
  font-size: 1.5em;
  margin-left: 7px;
`;

export {
  ContainerDiv,
  LoginContainerDiv,
  StyledHeader,
  StyledLogoSet,
  StyledSearchBox,
  StyledIconSet,
  PostContainerDiv,
  InputDiv,
  LoginInput,
  LoginButton,
  PostHeader,
  PostContainer,
  UsernamePost,
  ImageUser,
  ImagePost,
  IconPost,
  IconLike,
  LikeCounter,
  CommentsDiv,
  Timestamp,
  CommentInput,
  CommentDiv,
  UsernameComment,
  CommentP
};
