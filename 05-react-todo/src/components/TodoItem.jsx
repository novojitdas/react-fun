import React from "react";

const TodoItem = (props) => {
  return (
    <li className="flex justify-between">
      <span>
        {props.completed ? <></> : <input type="checkbox" name=""></input>}
        <span className="p-2">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
};

export default TodoItem;
