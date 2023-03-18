/** @format */

import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi HHi");
  }

  render(): React.ReactNode {
    return (
      <div className="App bg-accent-navy-200 min-h-screen">
        <h1>H 1 Tag</h1>
        <h2>H 2 Tag</h2>
        <h3>H 3 Tag</h3>
        <h4>H 4 Tag</h4>
        <h5>H 5 Tag</h5>
        <h6>H 6 Tag</h6>
      </div>
    );
  }
}
