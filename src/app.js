import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import httpErrors from "http-errors";
import logger from "morgan";
import path from "path";
import mongoose from "mongoose";

import indexRouter from "./routes/index";

require("dotenv").config();
mongoose.connect(process.env.MONGODB_URI);

const app = express();
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", () => {
  console.log("connected to db...");
});

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static(path.join(__dirname, "public")));

indexRouter(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(httpErrors(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
  next(false);
});

export default app;
