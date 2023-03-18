import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-20">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Content />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </div>
    );
  }
}
