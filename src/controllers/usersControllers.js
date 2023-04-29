const { User } = require('../models/User');

const { catchAsync } = require('../utils/catchAsync');

const { signupService } = require('../services/usersServices');

let signup = async (req, res, next) => {
  const newUser = await signupService(req.body);
  res.status(201).json(newUser);
};
signup = catchAsync(signup);

let login = async (req, res, next) => {
  // await
};
login = catchAsync(login);

let logout = async (req, res, next) => {
  // await
};
logout = catchAsync(logout);

module.exports = { signup, login, logout };
