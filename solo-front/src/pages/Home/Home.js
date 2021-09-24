import { React, useState, useEffect } from "react";

import CreateTask from "./CreateTask";
import DeleteTask from "./DeleteTask";

function Home() {
  let previousTask = JSON.parse(localStorage.getItem("tasks"));

  if (!previousTask) {
    previousTask = [];
  }

  const [tasks, saveTasks] = useState(previousTask);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const newTask = (task) => {
    saveTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    const newTask = tasks.filter((task) => task.id !== id);
    saveTasks(newTask);
  };

  const title = tasks.length === 0 ? "Add Task" : "Manage your tasks";

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <CreateTask key={tasks.id} newTask={newTask} />
        </div>
        <div className="one-half column">
          <h2>{title} </h2>
          {tasks.map((task) => (
            <DeleteTask key={task.id} task={task} deleteTask={deleteTask} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
