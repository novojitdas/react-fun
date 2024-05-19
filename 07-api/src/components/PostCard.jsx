import React from "react";

const PostCard = (props) => {
  return (
    <div className="p-10 shadow-lg">
      <h3 className="font-bold">{props.title}</h3>
      <p>{props.body}</p>
    </div>
  );
};

export default PostCard;
