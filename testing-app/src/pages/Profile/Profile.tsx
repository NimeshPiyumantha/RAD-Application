import React, { ChangeEvent, Component } from "react";
import Post from "../../components/Post";
import Header from "../../components/Header";
import { PostDetails } from "../../types/PostDetails";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import PostAddIcon from "@mui/icons-material/PostAdd";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { Divider, TextField } from "@mui/material";
import api from "../../axios";

type ProfileProps = {};

type ProfileState = {
  postList: PostDetails[];
  isClickedCreateNewPost: boolean;
  title: string;
  description: string;
  hoursCount: number;
  lecturerName: string;
  tagString: string;
  categoryName: string;
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
      categoryName: "",
      postList: [],
    };
  }

  componentDidMount(): void {
    this.retrieveAllPosts();
  }

  retrieveAllPosts = () => {
    api
      .get("post")
      .then((res) => {
        console.log(res);
        this.setState((prevState) => ({
          ...prevState,
          postList: res.data.responseData,
        }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleClickCreateNewPost = () => {
    this.setState((prevState) => ({
      ...prevState,
      isClickedCreateNewPost: !prevState.isClickedCreateNewPost,
    }));
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted");

    console.log(this.state);

    // destructuring assignment
    const {
      title,
      categoryName,
      description,
      hoursCount,
      lecturerName,
      tagString,
    } = this.state;

    let tagsArray = this.convertTagStringToArray(tagString);

    let newPost = {
      title: title,
      description: description,
      hoursCount: hoursCount,
      lecturerName: lecturerName,
      tags: tagsArray,
      categoryName: categoryName,
    };

    // Here, you should pass the post object to back-end for the stroring purposes

    api
      .post("post", newPost)
      .then((res) => {
        console.log(res);
        this.setState((prevState) => ({
          postList: [...prevState.postList, res.data.responseData],
        }));
        this.clearState();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  convertTagStringToArray = (tagString: string): string[] => {
    if (tagString !== "") {
      return tagString.split(",").map((tag) => tag.trim());
    }
    return [];
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    // desctructuring assignment
    const { name, value, type } = event.target;

    const inputValue = type === "number" ? parseInt(value) : value;

    console.log(typeof inputValue);
    if (name === "hoursCount" && Number(inputValue) < 0) {
      return;
    }

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  clearState = () => {
    this.setState((prevState) => ({
      ...prevState,
      title: "",
      description: "",
      hoursCount: 0,
      lecturerName: "",
      tagString: "",
      categoryName: "",
    }));
  };

  removePostFromList = (postId: string) => {
    this.setState((prevstate) => ({
      postList: prevstate.postList.filter((post) => post._id !== postId),
    }));
  };

  render() {
    return (
      <>
        <Header />
        <div className="py-6 px-32">
          <div className="w-full flex flex-col space-y-1">
            {!this.state.isClickedCreateNewPost ? (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-accent-navy-200 text-white rounded flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Create New Post</h6>
                  <AddCircleIcon />
                </div>
                <div
                  className="cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400"
                  onClick={this.handleClickCreateNewPost}
                >
                  <PostAddIcon />
                  <h6>Your New Post</h6>
                </div>
              </>
            ) : (
              <>
                <div
                  className="cursor-pointer w-full p-4 bg-accent-navy-200 text-white rounded flex justify-between items-center"
                  onClick={this.handleClickCreateNewPost}
                >
                  <h6>Discard Post</h6>
                  <RemoveCircleIcon />
                </div>
                <div className="w-full cursor-pointer p-8 bg-white rounded text-slate-400 flex justify-center items-center space-x-3 border border-slate-400">
                  <form
                    className="flex flex-col space-y-3 w-full"
                    onSubmit={this.handleSubmit}
                  >
                    <TextField
                      label="Post Title"
                      type="text"
                      variant="outlined"
                      name="title"
                      placeholder="Enter post title"
                      onChange={this.handleInputChange}
                      value={this.state.title}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Category"
                      type="text"
                      variant="outlined"
                      name="categoryName"
                      placeholder="Enter Category Name"
                      onChange={this.handleInputChange}
                      value={this.state.categoryName}
                      fullWidth={true}
                      required
                    />
                    <TextField
                      label="Post Description"
                      type="text"
                      variant="outlined"
                      name="description"
                      placeholder="Enter post description"
                      value={this.state.description}
                      onChange={this.handleInputChange}
                      fullWidth={true}
                      multiline
                      minRows={5}
                      maxRows={Infinity}
                      required
                    />
                    <TextField
                      label="Hours Count"
                      type="number"
                      variant="outlined"
                      name="hoursCount"
                      placeholder="Enter hours count"
                      onChange={this.handleInputChange}
                      value={this.state.hoursCount}
                      fullWidth={true}
                    />
                    <TextField
                      label="Lecturer Name"
                      type="text"
                      variant="outlined"
                      placeholder="Enter Lecturer Name"
                      name="lecturerName"
                      onChange={this.handleInputChange}
                      value={this.state.lecturerName}
                      fullWidth={true}
                    />
                    <TextField
                      label="Tags (Comma separated tags)"
                      type="text"
                      variant="outlined"
                      name="tagString"
                      placeholder="Enter comma separated tags"
                      onChange={this.handleInputChange}
                      value={this.state.tagString}
                      fullWidth={true}
                      required
                    />
                    <button className="py-2 bg-accent-navy-200 text-white rounded">
                      <h6>Publish Post</h6>
                    </button>
                  </form>
                </div>
              </>
            )}
          </div>

          <Divider className="!my-5" />

          {this.state.postList.map((post) => (
            <Post
              key={post._id}
              _id={post._id}
              title={post.title}
              description={post.description}
              tags={post.tags}
              hoursCount={post.hoursCount}
              lecturerName={post.lecturerName}
              removePostFromList={this.removePostFromList}
            />
          ))}
        </div>
      </>
    );
  }
}
