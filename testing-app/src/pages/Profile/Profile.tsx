import React, { Component } from "react";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { PostDetails } from "../../types/PostDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField } from "@mui/material";

type ProfileProps = {};

type ProfileState = {
  postList: PostDetails[];
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      postList: [
        {
          id: "1",
          title: "Lecture Day 01",
          description: (
            <p>
              Lecture D01 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          hoursCount: 8,
          tags: ["intro", "typescript"],
        },
        {
          id: "2",
          title: "Lecture Day 02",
          description: (
            <p>
              Lecture D02 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          hoursCount: 6,
          lecturerName: "Chanu",
          tags: ["react", "tailwind"],
        },
        {
          id: "3",
          title: "Lecture Day 03",
          description: (
            <p>
              Lecture D03 - Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Eligendi alias laborum accusantium iusto molestias. Magnam
              nisi atque, nihil, ex quaerat quam velit deserunt consequatur
              soluta pariatur cumque accusamus consequuntur. Quidem! Lorem ipsum
              dolor sit amet consectetur, adipisicing elit. Eligendi alias
              laborum accusantium iusto molestias. Magnam nisi atque, nihil, ex
              quaerat quam velit deserunt consequatur soluta pariatur cumque
              accusamus consequuntur. Quidem! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Eligendi alias laborum accusantium
              iusto molestias. Magnam nisi atque, nihil, ex quaerat quam velit
              deserunt consequatur soluta pariatur cumque accusamus
              consequuntur. Quidem!
            </p>
          ),
          tags: ["Lifecycle", "rounting", "structure"],
        },
      ],
    };
  }

  render() {
    return (
      <>
        <Header />
        <div className="py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            <>
              <div className="cursor-pointer w-full p-4 bg-accent-navy-200 text-white rounded flex justify-between items-center">
                <h6>Create New Post</h6>
                <AddCircleIcon />
              </div>
              <div className="cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                <PostAddIcon />
                <h6>Your New Post</h6>
              </div>
            </>
          </div>
          {this.state.postList.map((post, index) => (
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
      </>
    );
  }
}
