const { User } = require('../models/User');

const { HttpError } = require('../utils/HttpError');

const signupService = async (user) => {
  const searchUser = await User.findOne({ email: user.email });
  if (searchUser) {
    throw new HttpError(409, 'user with this email already exists');
  }

  return await User.create(user);
};

module.exports = {
  signupService,
};
