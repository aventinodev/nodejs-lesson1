const { Router } = require('express');

const { createUserSchema, updateUserValidationSchema } = require('../utils/validation/usersValidationSchemas');

const { validateBody } = require('../utils/validateBody');

const { signup, login, logout } = require('../controllers/usersControllers');

const router = Router();

router.post('/signup', validateBody(createUserSchema), signup);
router.post('/login', validateBody(createUserSchema), login);
router.post('/logout', logout);

module.exports = { usersRouter: router };
