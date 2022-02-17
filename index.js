require("dotenv").config();
const serverSays = require("debug")("server:root");
const morgan = require("morgan");
const express = require("express");
const chalk = require("chalk");

const port = process.env.SERVER_PORT;
const app = express();

app.listen(port, () => {
  serverSays(
    `server listening in ${chalk.bgWhite.black(`http://localhost:${port}/`)}`
  );
});

app.use(morgan("tiny"));
