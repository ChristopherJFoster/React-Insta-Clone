import styled from "styled-components";

const ContainerDiv = styled.div`
  border-radius: 8px;
  margin: 40px auto 40px auto;
  border: 7px dashed #ffd380;
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
`;

const PostContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
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
  border: 1px solid #ffd380;
  background: lemonchiffon;
  font-size: 2.5em;
`;

const LoginButton = styled.button`
  margin: 5px;
  border-radius: 5px;
  border: none;
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

const PostContainer = styled.section`
  width: 600px;
  margin: 0 auto 20px auto;
  border-radius: 5px;
  border: 1px solid lightgrey;
  .visible-false {
    display: none;
  }
  .visible-true {
    display: inline;
  }
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

const UsernameComment = styled.h3`
  font-size: 1.5em;
  margin-left: 0;
  font-weight: bold;
`;

export {
  ContainerDiv,
  LoginContainerDiv,
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
  UsernameComment
};
