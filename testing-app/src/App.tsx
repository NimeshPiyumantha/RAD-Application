/** @format */

import React, { Component } from "react";

import "./App.css";
import Content from "./components/Content";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App bg-white min-h-screen">
       <Content/>
      </div>
    );
  }
}
