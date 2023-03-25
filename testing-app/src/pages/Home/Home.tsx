import React, { Component } from "react";
import Post from "../../components/Post";


type PostDetails = {
  id: string;
  title: string;
  description: React.ReactNode;
  hoursCount?: number;
  lecturerName?: string;
  tags: string[];
};
type HomeProps={};
type HomeState={
  postList:PostDetails[];
};
export default class Home extends Component <HomeProps,HomeState>{
  constructor(props: HomeProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Post 1",
          description:
            <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse."</p>,
            hoursCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "2",
          title: "Post 2",
          description:
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse."</p>,
          hoursCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "3",
          title: "Post 3",
          description:
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse."</p>,
          hoursCount: 10,
          tags: ["ui", "ux"],
        },
        {
          id: "4",
          title: "Post 4",
          description:
          <p>"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda ducimus recusandae velit ullam, quos a eum consequuntur et praesentium omnis nobis? Maxime velit nesciunt at aperiam perspiciatis necessitatibus, itaque esse."</p>,
          hoursCount: 10,
          tags: ["ui", "ux"],
        },
      ],
    };
  }

  render(){
    return(
      <div className="p-6">
        {this.state.postList.map((post, index) =>(
          <Post
          key={post.id}
          title={post.title}
          description={post.description}
          hoursCount={post.hoursCount}
          lecturerName={post.lecturerName}
          tags={post.tags}
          />
        ))}
      </div>
    );
  }
}