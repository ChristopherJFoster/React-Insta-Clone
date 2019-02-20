import React from "react";
import PostsPage from "../components/PostContainer/PostsPage";

const authenticate = App => Login => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { loggedIn: false };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      console.log("authenticate render");
      return this.state.loggedIn ? <PostsPage /> : <Login />;
    }
  };
};

export default authenticate;
