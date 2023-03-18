/** @format */

import React, { Component } from "react";

import "./App.css";
import Home from "./pages/Home";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi HHi");
  }

  render(): React.ReactNode {
    return (
      <div className="App bg-accent-navy-200 min-h-screen">
        <Home/>
      </div>
    );
  }
}
