const { Task } = require('../models/Task');

const { HttpError } = require('../utils/HttpError');

const getTasksService = async () => {
  return await Task.find();
};

const getTaskService = async (id) => {
  const task = await Task.findById(id);
  if (!task) {
    throw new HttpError(404, 'task not found');
  }
  return task;
};

const createTaskService = async (body) => {
  const newTask = await Task.create(body);
  return newTask;
};

const updateTaskService = async (id, body) => {
  const updatedTask = await Task.findByIdAndUpdate(id, body, { new: true });
  if (!updatedTask) {
    throw new HttpError(404, 'task not found');
  }
  return updatedTask;
};

const deleteteTaskService = async (id) => {
  const deletetedTask = await Task.findByIdAndDelete(id);
  if (!deletetedTask) {
    throw new HttpError(404, 'task not found');
  }
  return id;
};

module.exports = {
  getTasksService,
  getTaskService,
  createTaskService,
  updateTaskService,
  deleteteTaskService,
};
