import React, { useEffect, useState } from "react";
import { PostList } from "./PostList";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addAllPost, selectedPost } from "../store/slice/postSlice";

export const Posts = () => {
  const dispatch = useDispatch(); 
  const posts = useSelector(selectedPost);
  const [post, setPost] = useState([]); 


  useEffect(() => {
    async function getAllPost() {
      const token = localStorage.getItem("token");
      const obj = JSON.parse(token);

      const res = await axios.get("http://localhost:8080/api/posts/get", {
        headers : {
          'Authorization': `Bearer ${obj.token}`
        }
      });

      dispatch(addAllPost(res.data));
      setPost(res.data);
    }
    getAllPost();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <PostList key={post.id} post={post} />
      ))}
    </div>
  );
};
