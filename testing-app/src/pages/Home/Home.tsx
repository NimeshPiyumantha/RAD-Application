import React, { Component } from "react";
import Post from "../../components/Post/Post";

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <Post/>
        <Post/>
        <Post/>
      </div>
    );
  }
}
