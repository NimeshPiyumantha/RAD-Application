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
  isClickedCreateNewPost: boolean;
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tagString: string;
};

export default class Profile extends Component<ProfileProps, ProfileState> {
  constructor(props: ProfileProps) {
    super(props);
    this.state = {
      title: "",
      description: "",
      hoursCount: 0,
      lecturerName: "",
      tagString: "",
      isClickedCreateNewPost: false,
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
