import React, { useState } from "react";

const Count = () => {
  const [value, setValue] = useState(1);

  const btn = "p-1 rounded bg-slate-200";
  console.log(value);
  return (
    <div>
      <p>value is {value}</p>
      <p>number is {value % 2 == 0 ? "Even" : "Odd"}</p>
      <button
        className={btn}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Increment
      </button>
      <button
        className={btn}
        onClick={() => {
          setValue(value - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default Count;
