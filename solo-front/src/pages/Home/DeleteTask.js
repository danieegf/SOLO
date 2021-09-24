import React from "react";



function DeleteTask({ task, deleteTask }) {
  return (
    <div className="task">
      <p>
        Task number: <span>{task.id}</span>
      </p>
      <p>
        Title: <span>{task.title}</span>
      </p>
      <p>
        Description: <span>{task.description}</span>
      </p>
      <label className="u-full-width">Completed</label>

      <button
        className="button delete u-full-width"
        onClick={() => deleteTask(task.id)}
      >
        Delete &times;
      </button>
    </div>
  );
}

export default DeleteTask;
