"use client";

import { React, useState, useRef } from "react";
import userlogo from "../assets/images/user.png";
import { LuVideo } from "react-icons/lu";
import { FaSmile } from "react-icons/fa";
import { FaRegImages } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addPost } from "../store/slice/postSlice";
import { useAuth } from "./AuthContext";

export const CreatePost = () => {

  const dispatch = useDispatch();

  const { user } = useAuth();
  const [image, setImage] = useState("");

  const [file, setFile] = useState("");
  const [imageName, setImageName] = useState("");
  const [content, setContent] = useState("");
  const [message, setMessage] = useState("");
  const [username, setusername] = useState("");
  const fileInput = useRef(null);


  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    const obj = JSON.parse(token);
    
    

    if (!content) return;
    if (user) {
      setusername(user.username);
    }

    const formData = new FormData();
    formData.append("image", file);
    formData.append("imageName", imageName);
    formData.append("content", content);
    formData.append("date", new Date().toDateString());
    formData.append("name",username);


    try {
      
      const res = await axios.post(
        "http://localhost:8080/api/posts/save",
        formData,
        {
          headers: {
            'Authorization': `Bearer ${obj.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(addPost(res.data));
      setMessage("Post created successfully!");
      setImageName("");
      setContent("");
      setImage(null);
      removeImage();
    } catch (error) {
      setMessage("Failed to create post. Please try again.");
    }
  };

  const handleFileInputClick = () => {
    fileInput.current.click();
  };

  const removeImage = () => {
    setImage(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);

    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      reader.onload = (e) => {
        setImage(e.target.result);
      };
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md text-gray-500">
      <div className="flex p-5 space-x-2 items-center">
        <img
          src={userlogo}
          className=" rounded-full  h-12 w-12"
          alt="user image"
          sizes="25"
          height={25}
          width={25}
        />

        <form
          onSubmit={handleSubmit}
          method="post"
          className="flex flex-1 justify-evenly"
        >
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="rounded-full flex-grow focus:outline-none h-12 font-medium bg-gray-100 px-4 "
            type="text"
            name="content"
            placeholder={`What is in your mind vembarasan`}
          />

          <button
            className=" text-white  font-medium  bg-green-500  h-12 px-2 rounded-full w-20 md:w-28 ml-2"
            // onClick={handleSubmit}
          >
            Post
          </button>
        </form>
      </div>

      {image && (
        <div className="flex items-center px-4 py-2 space-x-4 filter transition  duration-150">
          <img src={image} className="h-14 w-24 object-contain" alt="user" />
          <MdDelete
            size={20}
            onClick={removeImage}
            className="cursor-pointer text-red-500 h-6 "
          />
        </div>
      )}

      <div className="flex justify-evenly py-2">
        <div className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-lg hover:cursor-pointer">
          <LuVideo className="text-red-600" size={20} />
          <p className="text-gray-600 font-semibold">Live Video</p>
        </div>
        <div
          onClick={handleFileInputClick}
          className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-lg hover:cursor-pointer"
        >
          <FaRegImages className="text-green-500" size={20} />
          <p className="text-gray-600 font-semibold">Images / Video</p>
          <input
            ref={fileInput}
            onChange={handleFileChange}
            type="file"
            hidden
            accept="image/*"
          />
        </div>
        <div className=" flex items-center p-1 space-x-1 flex-grow justify-center hover:bg-gray-200 rounded-lg hover:cursor-pointer">
          <FaSmile className="text-yellow-400" size={20} />
          <p className="text-gray-600 font-semibold">Smile</p>
        </div>
      </div>
    </div>
  );
};
