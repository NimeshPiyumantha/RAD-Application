import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Post from "../../components/Post";
import "./home.css";
import { PostDetails } from "../../types/PostDetails";
import api from "../../axios";

const Home = () => {
  const [postList, setPostList] = useState<PostDetails[]>([]);

  useEffect(() => {
    retrieveAllPosts();
  }, []);

  const retrieveAllPosts = () => {
    api
      .get("post")
      .then((res) => {
        console.log(res);
        setPostList(res.data.responseData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Header />
      <div className="p-6">
      {postList.map((post) => (
          <Post
            key={post._id}
            _id={post._id}
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
};
