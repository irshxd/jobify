const express = require("express");
const app = express();
const path = require("path");
const ejs = require("ejs");
const Employee = require("../Backend/models/employee");
const Employer = require("../Backend/models/employer");
app.set("view engine", "ejs");
const bodyParser = require("body-parser");

// Specify the views directory
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "Backend")));
app.use(express.static(path.join(__dirname, "views")));
app.set("view engine", "ejs");
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route imports
const product = require("./routes/employeRoute");

app.use(product);

module.exports = app;
