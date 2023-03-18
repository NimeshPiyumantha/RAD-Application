/** @format */

import React, { Component } from "react";

import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  componentDidMount(): void {
    console.log("Hi HHi");
  }

  render(): React.ReactNode {
    return (
      <div className="App bg-accent-navy-200 min-h-screen text-center">
        <Home />
        <About />
        <Contact />
        <Profile />
      </div>
    );
  }
}
