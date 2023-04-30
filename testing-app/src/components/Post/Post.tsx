import { Component } from "react";
import Tag from "../Tag";

type PostProps = {
  _id: string;
  title: string;
  description: string;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
  removePostFromList?: (postId: string) => void;
};

type PostState = {};

export default class Post extends Component<PostProps, PostState> {
  render() {
    return (
      <div className="flex justify-center">
        <div className="p-6 border border-slate-400 w-5/6 rounded mt-3 text-center">
          <h1 className="text-center p-2">{this.props.title}</h1>
          {this.props.description}
          <span className="flex space-x-5">
            {this.props.hoursCount ? (
              <p>
                <strong>Hours count</strong> : {this.props.hoursCount}
              </p>
            ) : null}
            {this.props.lecturerName ? (
              <p>
                <strong>Lecturer Name</strong> : {this.props.lecturerName}
              </p>
            ) : null}
          </span>

          <span className="w-full mt-3 flex space-x-3">
            {this.props.tags.map((tagText, index) => (
              <Tag key={index} text={tagText} />
            ))}
          </span>
        </div>
      </div>
    );
  }
}
