const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

const Task = mongoose.model('task', schema);

module.exports = { Task };
