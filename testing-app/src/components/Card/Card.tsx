import React, { Component } from "react";

type CardProps = {
  title: string;
  description: string;
};

type CardState = {};

export default class Card extends Component<CardProps, CardState> {
  render() {
    return (
      <div className="border border-slate-400 rounded p-3">
        <h1 className="mb-2">{this.props.title}</h1>
        <p className="p-3 text-center">{this.props.description}</p>
      </div>
    );
  }
}