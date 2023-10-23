import { ReactElement, useEffect, useState } from "react";
import axios from "axios";
import Post from "@/components/Post";
import { IPost } from "@/interfaces";
import FormComponent from "@/components/Form";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get("/api/admin/posts").then((res) => {
      console.log("res", res);
      setPosts(res.data);
    });
  }, []);

  return (
    <div className="flex flex-col items-center my-5">
      <div className="flex justify-between w-1/2">
        <h1 className="text-2xl font-bold">POSTS</h1>
        <button
          className="bg-yellow-50 shadow-md rounded-md p-4 hover:bg-slate-600 hover:text-white"
          onClick={() => {
            setShowForm(!showForm);
          }}
        >
          Create Post
        </button>
      </div>
      {showForm && <FormComponent />}
      {posts.map((post: IPost): ReactElement => {
        return (
          <div className="flex justify-center w-full" key={post.id}>
            <Post post={post} />
          </div>
        );
      })}
    </div>
  );
}
export default Posts;
