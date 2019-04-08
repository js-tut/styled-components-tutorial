import React, { Component } from "react";
import { MainBanner, SecondBanner } from "./components/Media";
class App extends Component {
  render() {
    return (
      <div>
        <MainBanner background="pink">Hello Media Queries</MainBanner>
        <SecondBanner />
      </div>
    );
  }
}

export default App;
