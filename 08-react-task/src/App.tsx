import { useState } from "react";
import Task from "./components/Task/Task.tsx";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-300">
      <Task />
    </div>
  );
}

export default App;
