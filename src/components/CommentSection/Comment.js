import React from 'react';
import './Comment.css';

const Comment = props => {
  console.log(props);
  return (
    <div className="comment-text">
      <span className="user">{props.data.username}</span>
      {' '}
      <span className="comment">{props.data.text}</span>
    </div>
  );
};


export default Comment;
