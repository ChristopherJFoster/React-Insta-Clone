import React, { Component } from "react";
import moment from "moment";
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContainer";
import "./css/main.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    // Retrieves stringified state object from localStorage (if any):
    const retrievedState = localStorage.getItem("storedState");
    // Parses state object back to its original formatting:
    const parsedState = JSON.parse(retrievedState);
    // Uses state object from localStorage if there is one. If not, uses dummyData as before:
    if (parsedState) {
      this.setState({
        data: parsedState.data,
        newCommentText: parsedState.newCommentText,
        searchText: parsedState.searchText
      });
    } else if (!parsedState) {
      // There might be a more succinct way to do this, but the following turns the timestamp string from dummyData into Unix Epoch Time (while leaving the other data alone). Earlier I had just edited dummy-data.js, so this is more elegant.
      const data = dummyData.map(post => {
        return (post = {
          username: post.username,
          visible: true,
          thumbnailUrl: post.thumbnailUrl,
          imageUrl: post.imageUrl,
          likes: post.likes,
          liked: false,
          timestamp: moment(
            post.timestamp,
            "MMMM Do YYYY, h:mm:ss a"
          ).valueOf(),
          comments: post.comments
        });
      });
      this.setState({
        data: data,
        newCommentText: "",
        searchText: ""
      });
    }
  }

  // Note: I think I have to call prevProps in order to call prevState, even though I don't use prevProps:
  componentDidUpdate(prevProps, prevState) {
    // Copies state into localStorage each time App.js is updated:
    let storedState = this.state;
    localStorage.setItem("storedState", JSON.stringify(storedState));
    // I put the search function inside CDU so I could be sure that this.state.searchText is current before setting the visible property accordingly. Required conditional to avoid an infinite loop since I have CDU calling setState():
    if (this.state.searchText !== prevState.searchText) {
      // Once again, to get at the data nested in this.state, I need a spread operator:
      let tempData = [...this.state.data];
      // It was nice to use the humble forEach to solve a problem. Here forEach() checks whether post.username includes the current searchText, and updates post.visible as true or false accordingly:
      tempData.forEach(post => {
        if (!post.username.includes(this.state.searchText)) {
          post.visible = false;
        } else if (post.username.includes(this.state.searchText)) {
          post.visible = true;
        }
      });
      this.setState({
        data: tempData
      });
    }
  }

  clearLocalStorage = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  toggleLike = (e, timestamp) => {
    e.preventDefault();
    // Finds index of the post that was liked:
    const postIndex = this.state.data.findIndex(
      post => post.timestamp === timestamp
    );
    // Sets up tempData to update nested state:
    let tempData = [...this.state.data];
    // If post not already liked, then a like is added:
    if (tempData[postIndex].liked === false) {
      // Increments likes by 1:
      tempData[postIndex].likes += 1;
      tempData[postIndex].liked = true;
      // Updates state to include new like total and marks the post as already liked:
      this.setState({
        data: tempData
      });
      tempData = [];
      return;
      // If post already liked, then a like is taken away:
    } else if (tempData[postIndex].liked === true) {
      // Dencrements likes by 1:
      tempData[postIndex].likes -= 1;
      tempData[postIndex].liked = false;
      // Updates state to include new like total and marks the post as not liked:
      this.setState({
        data: tempData
      });
      return;
    }
  };

  addNewComment = (e, timestamp) => {
    e.preventDefault();
    const newComment = {
      // We haven't really worked out the username of the commenter, so I hardcoded this one for now:
      username: "catslanderer",
      text: this.state.newCommentText
    };
    // Finds index of the post that was commented on:
    const postIndex = this.state.data.findIndex(
      post => post.timestamp === timestamp
    );
    // Sets up tempData to update nested state:
    const tempData = [...this.state.data];
    // Pushes new comment to comment array:
    tempData[postIndex].comments.push(newComment);
    // Updates state to include new comment and clears the comment form:
    this.setState({
      data: tempData,
      newCommentText: ""
    });
  };

  render() {
    return (
      <div className="container">
        <header className="header">
          <SearchBar
            clearLocalStorage={this.clearLocalStorage}
            changeHandler={this.changeHandler}
            searchText={this.searchText}
          />
        </header>
        <PostContainer
          posts={this.state.data}
          toggleLike={this.toggleLike}
          newCommentText={this.state.newCommentText}
          changeHandler={this.changeHandler}
          addNewComment={this.addNewComment}
        />
      </div>
    );
  }
}

export default App;
