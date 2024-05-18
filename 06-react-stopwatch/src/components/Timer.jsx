import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // mounted
    const timer = setInterval(() => setTime(time + 1), 1000);

    return function () {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="p-10 rounded-full m-10 bg-slate-100">
      <h1 className="font-bold text-center">STOPWATCH</h1>
      <p>Current time is {time}</p>
    </div>
  );
};

export default Timer;
