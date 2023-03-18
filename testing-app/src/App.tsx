/** @format */

import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi HHi");
  }

  render(): React.ReactNode {
    return (
      <div className="App bg-accent-navy-100 min-h-screen">
        <h1>Hi</h1>
        <h2>Hidid</h2>
      </div>
    );
  }
}
