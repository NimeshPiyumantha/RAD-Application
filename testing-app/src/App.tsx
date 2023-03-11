/** @format */

import React, { Component } from "react";

import "./App.css";

export default class App extends Component {
 componentDidMount(): void {
  console.log("Hi HHi")
 }

  render(): React.ReactNode {
    return (
      <div className="App">
        <h1>Hi</h1>
      </div>
    );
  }
}