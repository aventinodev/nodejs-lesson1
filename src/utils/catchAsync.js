const catchAsync = (func) => {
  return async (req, res, next) => {
    try {
      return await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// const catchAsync = (controller) => {
//   return (req, res, next) => {
//     controller(req, res).catch(next);
//   };
// };

module.exports = { catchAsync };
