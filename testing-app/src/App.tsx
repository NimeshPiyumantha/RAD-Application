/** @format */

import React, { Component } from "react";

import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App bg-white min-h-screen p-5">
        {/* <Home />
        <About />
        <Contact />
        <Profile /> */}
      </div>
    );
  }
}
