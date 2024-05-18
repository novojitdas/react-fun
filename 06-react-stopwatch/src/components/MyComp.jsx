import React, { useEffect, useState } from "react";

const MyComp = () => {
  const btn = "rounded bg-slate-200";

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(10);

  useEffect(() => {
    console.log("My component is mounting");

    return function () {
      console.log("Component is unmounting");
    };
  }, []);

  useEffect(() => {
    console.log("Count is updated", count);

    return function () {
      console.log("count is returning", count);
    };
  }, [count]);

  // useEffect(() => {
  //   console.log("count2 is updated");
  // }, [count2]);

  return (
    <div>
      <h3>count is {count}</h3>
      <h3>count2 is {count2}</h3>
      <button className={btn} onClick={() => setCount(count + 1)}>
        count++
      </button>
      {/* <button className={btn} onClick={() => setCount2(count2 + 1)}> 
        count2++
      </button> */}
    </div>
  );
};

export default MyComp;
