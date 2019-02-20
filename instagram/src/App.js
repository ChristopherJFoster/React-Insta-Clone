import React from "react";
import "./css/main.css";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    console.log("test");
    return <PostsPage />;
  }
}

export default App;
