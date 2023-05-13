const { HttpError } = require('../utils/HttpError.js');
const { generateTokens } = require('../utils/generateTokens.js');

const { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } = process.env;

const jwt = require('jsonwebtoken');
const { User } = require('../models/User.js');

const auth = async (req, res, next) => {
  let token;
  let user;

  try {
    token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new HttpError(401, 'Unauthorized');
    }
  } catch (error) {
    next(error);
  }

  try {
    const { id } = jwt.decode(token);
    user = await User.findById(id);
    if (!user || !user.refresh_token) {
      throw new HttpError(401, 'Unauthorized');
    }
    jwt.verify(token, ACCESS_TOKEN_SECRET);
    req.user = user;
    next();
  } catch (error) {
    if (!(error instanceof jwt.TokenExpiredError)) {
      next(error);
    }

    try {
      jwt.verify(user.refresh_token, REFRESH_TOKEN_SECRET);
      const { accessToken, refreshToken } = generateTokens({ id });

      await User.findByIdAndUpdate(id, { refresh_token: refreshToken });
      res.json(accessToken);
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { auth };
