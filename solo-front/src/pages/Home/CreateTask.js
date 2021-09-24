import React, { Fragment, useState } from "react";

fetch("http://localhost:4001/api")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

export function createApi(data) {
  const url = "http://localhost:4001/api/createTask";
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(url, params).then((response) => {
    return response.json();
  });
}

function CreateTask({ newTask }) {
  const [task, updateTask] = useState({
    id: "",
    title: "",
    description: "",
    completed: false,
  });

  const [error, updateError] = useState(false);

  const updateState = (e) => {
    updateTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const { id, title, description, completed } = task;

  const submitTask = async (e) => {
    const result = createApi(task);
    console.log(result);
  
    if (title.trim() === "" || description.trim() === "" || id.trim() === "") {
      updateError(true);
    }
    e.preventDefault();
    newTask(task);

    updateTask({
      id: "",
      title: "",
      description: "",
      completed: false,
    });
  };

  return (
    <Fragment>
      <h2>Create Task</h2>
      {error ? <p className="alert-error">All fields are required</p> : null}
      <form onSubmit={submitTask}>
        <label>ID</label>
        <input
          type="number"
          name="id"
          className="u-full-width"
          placeholder="E.g Task 1 "
          onChange={updateState}
          value={id}
        />
        <label>Task</label>
        <input
          type="text"
          name="title"
          className="u-full-width"
          placeholder="E.g Buy groceries "
          onChange={updateState}
          value={title}
        />
        <label>Description</label>
        <input
          type="text"
          name="description"
          className="u-full-width"
          placeholder="E.g Description task"
          onChange={updateState}
          value={description}
        />
        <label className="u-full-width">
          <input
            type="checkbox"
            checked_={task.toString(completed)}
            name="completed"
          />
          Completed
        </label>

        <button type="submit" className="u-full-width button create">
          Create Task
        </button>
      </form>
    </Fragment>
  );
}

export default CreateTask;
