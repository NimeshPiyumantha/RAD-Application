/** @format */

import React, { Component } from "react";

import "./App.css";
import Content from "./components/Content";
import Header from "./components/Header";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default class App extends Component {
  render(): React.ReactNode {
    return (
      <div className="App bg-white min-h-screen">
        <Header/>
       <Content/>
      </div>
    );
  }
}
