import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";
import Login from "../../pages/Login";

export default class Content extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/" element={<Login/>}></Route>
        </Routes>
      </div>
    );
  }
}
 