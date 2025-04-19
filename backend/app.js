const express = require("express");
const morgan = require("morgan");
const functionalitiesController = require("./controller/functionalitiesController");
// const actionSequenceController = require("./controller/actionSequenceController");

const app = express();

app.listen(8080);
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use("", functionalitiesController);
// app.use("/function", actionSequenceController);

// 404 page
app.use((req, res) => {
    res.status(404);
});
  