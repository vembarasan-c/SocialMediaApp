import axios from "axios";
import React, { useEffect, useState } from "react";

import logo from "../assets/images/developer.jpg";

import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { PiShareFatBold } from "react-icons/pi";
import { useAuth } from "./AuthContext";
import LikeButton from "./LikeButton";

export const PostList = (post) => {
  const [userdata, setUserdata] = useState(post.post.likes);
  const token = localStorage.getItem("token");
  const obj = JSON.parse(token);
  const {user} = useAuth();


  useEffect( () => {
    async function getUser(){
      const res = await axios.get(`http://localhost:8080/api/auth/user/${user.username}`, {
        headers : {
          'Authorization': `Bearer ${obj.token}`
        }
      });

      setUserdata(res.data);
    }

    getUser();
  }, [])



  return (
    <div className="flex flex-col" key={post.post.id}>
      <div className="bg-white rounded-lg p-4 mt-6">
       
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={logo}
            alt="user profile"
          />
          <div className=" space-y-1">
            <p className="font-semibold">{post.post.name}</p>
            <p className="text-gray-500 text-sm">{post.post.date}</p>
          </div>
        </div>

        <p className="my-2 pl-2 font-semibold text-gray-800">
          {post.post.content}
        </p>

        {post.post.data != null && (
            <img  
              src={`data:image/jpeg;base64,${post.post.data}`}
             className=" w-full  sm:h-96 h-72 object-cover   shadow-md shadow-gray-400 rounded-lg     "  alt="image description" />
        )}

        {/* Footer SHow the buttons like, comment and share*/}
        <div className="flex justify-center mt-2 space-x-12 bg-white items-center ">
          

           {/* like button  */}
           <LikeButton postId={post.post.id} userId={userdata.id} key={post.post.id} /> 

          <div
            className="cursor-pointer flex items-center hover:bg-gray-100 rounded-full flex-grow justify-center
                                space-x-1 p-2 "
          >
            <FaRegCommentDots size={20} />
            <p className="font-semibold text-xs sm:text-base">Comment</p>
          </div>

          <div className="cursor-pointer flex items-center hover:bg-gray-100 rounded-full flex-grow justify-center space-x-1 p-2 ">
            <PiShareFatBold size={20} />
            <p className="font-semibold text-xs sm:text-base">Share</p>
          </div>
        </div>
      </div>
    </div>
  );
};
