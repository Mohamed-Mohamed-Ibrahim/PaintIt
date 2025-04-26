const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const functionalitiesController = require("./controller/functionalitiesController");
const actionSequenceController = require("./controller/actionSequenceController");

const app = express();

app.listen(8080);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors({ origin: true, credentials: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});
// app.post("/function/shape", (req, res) => {
//   console.log(req.body);

//   res.end();
// });
// app.get("/", (req, res) => {
//   console.log(123);
//   res.end();
// });

app.use("/", functionalitiesController);
app.use("/function", actionSequenceController);
// 404 page
app.use((req, res) => {
  res.status(404);
  console.log(12);
  res.end();
});
