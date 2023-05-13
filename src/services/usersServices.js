const { invalid } = require('joi');
const { User } = require('../models/User');
const bcrypt = require('bcrypt')

const { }

const { HttpError } = require('../utils/HttpError');

const signupService = async (user) => {
  const searchUser = await User.findOne({ email: user.email });
  if (searchUser) {
    throw new HttpError(409, 'user with this email already exists');
  }

  return await User.create(user);
};

const loginService = async (body) => {
  const searchUser = await User.findOne({ email: body.email });
  
  if (!searchUser) {
    throw new HttpError(401, 'wrong email or password');
  }
  const isPasswordCorrect = bcrypt.compare(body.password)
  



};

module.exports = {
  signupService,
  loginService,
};
