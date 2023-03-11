/** @format */

import React, { Component } from "react";
import logo2 from "./logo.svg";
import "./App.css";

export default class App extends Component {
 componentDidMount(): void {
  console.log("Hi HHi")
 }

  render(): React.ReactNode {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo2} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}