import React, { useState } from 'react';

const LikeSection = props => {

  const [likeState, setLikeState] = useState(400);
  return (
    <div>
    <div
      className="like-section"
      key="likes-icons-container"
    >
      <div  className="like-section-wrapper">
        <i onClick={() => setLikeState(likeState + 1)} className="far fa-heart" />
      </div>
      <div className="like-section-wrapper">
        <i className="far fa-comment" />
      </div>
    </div>
    <p className="like-number">{likeState}   likes</p>
</div>
  )
};

export default LikeSection;
