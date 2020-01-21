// You will add code in this file

import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

const Post = (props) => {
  // set up state for the likes
  
console.log(props);
  return (
    <div className="post-border">
      <PostHeader
        username={props.data.username}
        thumbnailUrl={
          props.data.thumbnailUrl
        }
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.data.imageUrl}
        />
      </div>
      <LikeSection />
      <CommentSection
        postId={props.data.comments.username}
        comments={props.data.comments.text}
      />
    </div>
  );
};

export default Post;
