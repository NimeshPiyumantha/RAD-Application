import React, { Component } from "react";

type CardProps = {
  title: string;
  description: string;
};

type CardState = {};

export default class Card extends Component<CardProps, CardState> {
  render() {
    return (
      <div className="border border-slate-400 flex flex-col p-6 w-1/4 text-center rounded">
        <h1 className="mb-2">{this.props.title}</h1>
        <p>{this.props.description}</p>
      </div>
    );
  }
}