import React, { useState } from "react";

interface ITask {
  id: number;
  text: string;
  isCompleted: boolean;
}

const Task: React.FC = () => {
  const [tasklist, setTasklist] = useState<ITask[]>([]);
  const [newTask, setNewtask] = useState<string>("");

  // Function
  // AddTask (Done)
  // ToogleComplete
  // DeleteTask

  const addTask = () => {
    // Ignore empty input
    // add newTask into tasklist
    // reset newTask
    if (newTask.trim() === "") return;

    const newTaskItem: ITask = {
      id: tasklist.length + 1,
      text: newTask,
      isCompleted: false,
    };

    setTasklist([...tasklist, newTaskItem]);
    setNewtask("");
  };

  const toggleComplete = (taskId: number) => {
    const updatedTasklist = tasklist.map((task) =>
      task.id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasklist(updatedTasklist);
  };

  const deleteTask = (taskId: number) => {
    const updatedTaskList = tasklist.filter((task) => task.id !== taskId);
    setTasklist(updatedTaskList);
  };

  return (
    <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
      <div className="p-6 m-6 rounded-2xl shadow-xl bg-slate-100">
        <h1 className="text-center font-semibold text-2xl mb-2">
          Pending Task
        </h1>
        <div>
          <input
            type="text"
            placeholder="Add New Task"
            className="bg-slate-400 m-2 p-2 placeholder:text-slate-900"
            value={newTask}
            onChange={(e) => setNewtask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <button
            onClick={addTask}
            className="p-3 m-2 bg-blue-400 rounded-xl hover:bg-purple-400"
          >
            Add Task
          </button>
        </div>
        <div>
          <ul>
            {tasklist.map((task) => (
              <li
                key={task.id}
                style={{
                  textDecoration: task.isCompleted ? "line-through" : "none",
                  cursor: "pointer",
                }}
              >
                <span
                  onClick={() => toggleComplete(task.id)}
                  className="text-xl p-4 m-4 text-center font-sans"
                >
                  {task.text}
                </span>
                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-3 m-2 text-xl text-center text-white font-sans border bg-red-500 rounded-2xl hover:bg-orange-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Task;
