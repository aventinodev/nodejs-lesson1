const Joi = require("joi");

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  completed: Joi.boolean(),
});

const updateTaskValidationSchema = Joi.object()
  .keys({
    title: createTaskSchema.extract("title").optional(),
    completed: createTaskSchema.extract("completed").optional(),
  })
  .or("title", "completed");

module.exports = { createTaskSchema, updateTaskValidationSchema };
