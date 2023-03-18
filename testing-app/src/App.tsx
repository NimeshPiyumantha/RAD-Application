/** @format */

import React, { Component } from "react";

import "./App.css";
import Counter from "./components/Counter";
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
      <div className="App bg-white min-h-screen p-5">
        {/* <Home />
        <About />
        <Contact />
        <Profile /> */}
        <Counter/>
      </div>
    );
  }
}
