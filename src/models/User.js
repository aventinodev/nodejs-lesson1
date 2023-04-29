const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const schema = new mongoose.Schema(
  {
    email: String,
    password: String,
    refresh_token: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

schema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) {
    return next();
  }
  user.password = await bcrypt.hash(user.password, 12);
  next();
});

const User = mongoose.model('user', schema);

module.exports = { User };
