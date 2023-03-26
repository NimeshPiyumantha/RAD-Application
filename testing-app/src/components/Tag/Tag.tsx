import { Component } from "react";

type TagProps = {
    text: string;
};

type TagState = {};

export default class Tag extends Component<TagProps, TagState> {
    render() {
        return (
            <span className="px-6 py-2 border border-slate-400 rounded">
        <h6>{this.props.text}</h6>
      </span>
        );
    }
}