import React from "react";
import "./css/main.css";
import authenticate from "./components/authenticate/authenticate";
import PostsPage from "./components/PostContainer/PostsPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  render() {
    console.log("App render");
    return <PostsPage />;
  }
}

App = authenticate(App);

export default App;
