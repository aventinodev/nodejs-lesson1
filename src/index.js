const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");

const { PORT } = process.env;

app.listen(PORT, () =>
  console.log(
    `Server is up and running on port ${PORT} http://localhost:${PORT}`
  )
);
