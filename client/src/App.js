import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Components
import HomeContainer from "./components/home/HomeContainer";

class App extends Component {
  render() {
    return (
      <div>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
