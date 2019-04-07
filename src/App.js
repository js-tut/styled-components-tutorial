import React, { Component } from "react";
import { DangerButton, SuccessButton } from "./components/Buttons";
class App extends Component {
  render() {
    return (
      <>
        Hello From App
        <SuccessButton>Success</SuccessButton>
        <DangerButton>Danger</DangerButton>
      </>
    );
  }
}

export default App;
