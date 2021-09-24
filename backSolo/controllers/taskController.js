const { request, response } = require("express");
const express = require("express");
const _ = require("underscore");
const fs = require("fs");

const task = fs.readFileSync("src/data.json", "utf-8");
let tasks = JSON.parse(task);

exports.allTasks = (request, response) => {
  response.json(tasks);
};

exports.createTask = (request, response) => {
  const id = tasks.length + 1;
  const { title, description } = request.body;
  const newTask = {
    ...request.body,
    id,
  };

  if (title && description) {
    tasks.push(newTask);

    fs.writeFileSync("src/data.json", task, "utf-8");
    response.json(tasks);
  } else {
    response.status(500).json({
      error: "There was an error",
    });
  }
};

exports.updateTask = (request, response) => {
  tasks[request.params.id] = request.body;
  const brew = JSON.stringify(tasks);
  fs.writeFileSync("src/data.json", brew, "utf-8");
  response.json(tasks);
};

exports.deleteTask = (request, response) => {
  tasks = tasks.filter((tasked) => tasked.id != request.params.id);
  const brew = JSON.stringify(tasks);
  fs.writeFileSync("src/data.json", brew, "utf-8");
  response.json(tasks);
};
