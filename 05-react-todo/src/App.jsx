import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import Count from "./components/Count";

const App = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="flex flex-col justify-between space-y-4 p-10 w-80 border-2 border-black bg-white rounded-lg">
        <Count />
        <Header text="Todo App" />
        <TodoItem completed={true} text="Eat" />
        <TodoItem text="Sleep" />
        <Button />
      </div>
    </div>
  );
};

export default App;
