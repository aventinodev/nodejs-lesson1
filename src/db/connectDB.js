const mongoose = require("mongoose");

const connectDB = (uri) => {
  mongoose.connect(uri);
};
// return mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

module.exports = { connectDB };
