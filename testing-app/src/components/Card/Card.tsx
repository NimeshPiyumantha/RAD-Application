import React, { Component } from "react";

type CardProps = {
  icon:React.ReactNode;
  title: string;
  description: string;
};

type CardState = {};

export default class Card extends Component<CardProps, CardState> {
  render() {
    return (
      <div className="border border-slate-400 rounded-2xl p-3 ">
  <span className="flex justify-center ">
    {this.props.icon}
  <h1 className="mb-2"> {this.props.title}</h1>
  </span>
        <p className="p-3 text-center">{this.props.description}</p>
      </div>
    );
  }
}