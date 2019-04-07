import React, { Component } from "react";
import { RedBox, GreenBox } from "./components/Boxes";
class App extends Component {
  render() {
    return (
      <div>
        <RedBox color="red" />
        <GreenBox color="green" />
      </div>
    );
  }
}

export default App;
