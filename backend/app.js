const express = require("express");
const morgan = require("morgan");
// const blogRoutes = require("./routes/blogRoutes");

const app = express();

app.listen(8080);
app.use(morgan("dev"));

// app.use("/blogs", blogRoutes);