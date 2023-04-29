const Joi = require('joi');

const createUserSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string()
    .pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,30}$/)
    .required()
    .messages({
      'string.pattern.base': 'Password should contain minimum eight characters, at least one letter and one number.',
    }),
});

const updateUserValidationSchema = Joi.object()
  .keys({
    email: createUserSchema.extract('email').optional(),
    password: createUserSchema.extract('password').optional(),
  })
  .or('email', 'password');

module.exports = { createUserSchema, updateUserValidationSchema };
