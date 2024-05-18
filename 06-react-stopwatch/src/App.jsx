import React, { useEffect, useState } from "react";
import MyComp from "./components/MyComp";
import Timer from "./components/Timer";

function App() {
  // const btn = "rounded bg-slate-200";
  // const [isVisible, setIsVisible] = useState(true);
  // useEffect(() => {
  //   console.log("App is mounting....");
  // }, []);
  // return (
  //   <div>
  //     {isVisible ? <MyComp /> : <> </>}
  //     <button className={btn} onClick={() => setIsVisible(!isVisible)}>
  //       Toggle
  //     </button>
  //   </div>
  // );

  return (
    <div className="flex justify-center items-start h-screen bg-slate-800">
      <Timer />
    </div>
  );
}

export default App;
