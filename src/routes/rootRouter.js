const { Router } = require('express');

const { tasksRouter } = require('./tasksRouter');
const { usersRouter } = require('./usersRouter');

const router = Router();

router.use('/tasks', tasksRouter);
router.use('/users', usersRouter);

module.exports = router;
