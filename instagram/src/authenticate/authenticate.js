import React from "react";

const authenticate = App =>
  class extends React.Component {
    render() {
      console.log("authenticate render");
      return <App />;
    }
  };

export default authenticate;
