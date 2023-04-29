const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const { connectDB } = require("./db/connectDB");
const { PORT, DB_URI } = process.env;

(async () => {
  await connectDB(DB_URI);
  console.log(`Database connection established successfully!`);
  app.listen(PORT, () =>
    console.log(
      `Server is up and running on port ${PORT} http://localhost:${PORT}`
    )
  );
})();

// (() => {})();

// (function () { })();

// (async () => {})();
