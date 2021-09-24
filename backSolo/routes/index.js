const { Router, request, response } = require("express");
const router = new Router();
const _ = require("underscore");
const taskController = require("../controllers/taskController");

module.exports = function () {
  router.get("/", taskController.allTasks);
  router.post("/createTask", taskController.createTask);
  router.delete("/:id", taskController.deleteTask);
  router.put("/:id", taskController.updateTask);

  return router;
};
