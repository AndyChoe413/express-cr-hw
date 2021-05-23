const express = require("express");
const logger = require("morgan");
const path = require("path");

const todoRouter = require("./routes/todoRouter");
const indexRouter = require("./routes/indexRouter");
const app = express();

//middleware
app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/todo", todoRouter);

// app.listen(3000, () => {
//   console.log(`Server is running on port ${3000}!`)
// })

module.exports = app
