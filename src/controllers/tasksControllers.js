const {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteteTaskService,
} = require("../services/tasksServices");

const { catchAsync } = require("../utils/catchAsync");

// 1 var
let getTasks = async (req, res, next) => {
  const tasks = await getTasksService();
  res.status(200).json(tasks);
};

getTasks = catchAsync(getTasks);

// 2 var
const getTask = catchAsync(async (req, res, next) => {
  const { taskId } = req.params;
  const task = await getTaskService(taskId);
  res.status(200).json(task);
});

const createTask = async (req, res, next) => {
  const createdTask = await createTaskService(req.body);
  res.status(201).json(createdTask);
};

let updateTask = async (req, res, next) => {
  const { taskId } = req.params;
  let updetedTask = await updateTaskService(taskId, req.body);
  res.status(200).json(updateTask);
};

updateTask = catchAsync(updateTask);

const deleteTask = async (req, res, next) => {
  const { taskId } = req.params;
  const deletedTaskId = await deleteteTaskService(taskId);
  res.status(200).json({ id: deletedTaskId });
};

module.exports = {
  getTasks,
  getTask,
  createTask: catchAsync(createTask) /*3 var*/,
  updateTask,
  deleteTask,
};

// export { catchAsync(createTask) as createTask
