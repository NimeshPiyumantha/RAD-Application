import React, { Component } from "react";
import Post from "../../components/Post/Post";

export default class Home extends Component {
  render() {
    return (
      <div className="p-6">
        <Post title="Nowty Pasan" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam vero amet, temporibus dolorum voluptates nisi delectus maiores quia dolorem aspernatur doloremque ipsam soluta accusamus. Asperiores harum corporis fuga. Fugiat." tags={["Intro","Description"]}/>
        <Post title="Nowty Sadun" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ullam vero amet, temporibus dolorum voluptates nisi delectus maiores quia dolorem aspernatur doloremque ipsam soluta accusamus. Asperiores harum corporis fuga. Fugiat." tags={["Intro","Commit"]}/>
      </div>
    );
  }
}
