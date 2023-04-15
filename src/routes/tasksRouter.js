const { Router } = require("express");

const {
  createTaskSchema,
  updateTaskValidationSchema,
} = require("../utils/validation/tasksValidationSchemas");

const { validateBody } = require("../utils/validateBody");

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasksControllers");

const router = Router();

router
  .route("/")
  .get(getTasks)
  .post(validateBody(createTaskSchema), createTask);
router
  .route("/:taskId")
  .get(getTask)
  .patch(validateBody(updateTaskValidationSchema), updateTask)
  .delete(deleteTask);

module.exports = { tasksRouter: router };
