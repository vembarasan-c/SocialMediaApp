import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";

const LikeButton = ({ postId, userId }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const token = localStorage.getItem("token");
  const obj = JSON.parse(token);

  useEffect(() => {
    fetchLikeCount();
  }, []);

  const fetchLikeCount = async () => {
    const res = await axios.get(
      `http://localhost:8080/api/likes/${postId}/count`,
      {
        headers: {
          Authorization: `Bearer ${obj.token}`,
        },
      }
    );
    setLikeCount(res.data);
  
};

  const checkIfLiked = async () => {
    const res = await axios.get(`http://localhost:8080/api/likes/check`, {
      headers: {
        Authorization: `Bearer ${obj.token}`,
      },
      params: { userId, postId },
    });
    setLiked(res.data); // results in boolean

  };

  const handleLike = async () => {
    checkIfLiked();

    if (liked) {
      await axios.delete(`http://localhost:8080/api/likes/${postId}`, {
        headers: {
          Authorization: `Bearer ${obj.token}`,
        },
        params: { userId },
      });
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {

      const res = await axios.post(`http://localhost:8080/api/likes/${postId}`, null, {
        headers: {
          Authorization: `Bearer ${obj.token}`,
        },
        params: { userId },
      });

      setLiked(true);
      setLikeCount(likeCount + 1);
    }
  };

  return (
    <div
      onClick={handleLike}
      className="cursor-pointer flex items-center hover:bg-gray-100 rounded-full flex-grow justify-center
                                space-x-1 p-2 "
    >
      <BiLike size={20}   className= {`${liked ? "text-blue-600" : "text-gray-500"}` }/>
      <p className=" font-semibold text-xs sm:text-base">
        {liked ? "Unlike" : "Like"} ({likeCount}){" "}
      </p>
    </div>
  );
};

export default LikeButton;
