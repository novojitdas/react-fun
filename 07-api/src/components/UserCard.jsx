import React from "react";

const UserCard = (props) => {
  return (
    <div>
      <img src="" alt="" />
      <h3>{props.data.name.first}</h3>
      <p>{props.data.phone}</p>
    </div>
  );
};

export default UserCard;
