const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Mongoose } = require("mongoose");
const routes = require("./routes"); // includes the routesjs file
const path = require("path");
const ejsMate = require("ejs-mate");

// executing following to use
app.use(express.json()); //we tell server to use json as well
app.use(routes); // we tells the server to use the routes in routes.js
app.set("view engine", "ejs"); // setting ejs view engine
app.use(express.static(path.join(__dirname, "public")));
app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "views")); // for default views path..

mongoose
  .connect("mongodb://localhost:27017/question", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Local Connection is Open!");
  })
  .catch((err) => {
    console.log("Mongo Connection error");
    console.log(err);
  });

app.listen(5000, () => {
  console.log("The API is running...");
});
