import React, { Component } from "react";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { PostDetails } from "../../types/PostDetails";

type ProfileProps = {};

type ProfileState = {
  postList: PostDetails[];
};

export default class Home extends Component<ProfileProps, ProfileState> {
  render() {
    return <div className="pt-6 pr-28 pl-28 pb-6"></div>;
  }
}
