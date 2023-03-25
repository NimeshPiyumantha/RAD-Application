import React, { Component } from "react";
import Post from "../../components/Post/Post";

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <Post title="Nowty Pasan" description="I am good Boy" tags={["Intro","Description"]}/>
        <Post title="Nowty Sadun" description="I am good Boy" tags={["Intro","Description"]}/>
      </div>
    );
  }
}
