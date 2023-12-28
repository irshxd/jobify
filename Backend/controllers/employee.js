const Employee = require("../models/employee");
const express = require("express");
const app = express();
const Employer = require("../models/employer");
const path = require("path");
const router = express.Router();
const cors = require("cors");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set static directories
app.use(express.static(path.join(__dirname, "Backend")));
app.use(express.static(path.join(__dirname, "views")));
app.use(
  cors({
    origin: [process.env.FrontendUrl],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

// Set views directory
app.set("views", path.join(__dirname, "views"));
const ejs = require("ejs");
app.set("view engine", "ejs");

// creating get request
exports.getHome = async (req, res) => {
  try {
    res.render("home");
  } catch (err) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
      err,
    });
    console.log(err);
  }
};

exports.getEmployee = async (req, res) => {
  try {
    res.render("employee.ejs");
  } catch (err) {
    res.status(500).json({
      messege: "Internal server error",
      success: false,
      err,
    });
  }
};
exports.getEmployer = async (req, res) => {
  try {
    res.render("employer");
  } catch (err) {
    res.status(500).json({
      messege: "Internal server error",
      success: false,
      err,
    });
  }
};
exports.getLogin = async (req, res) => {
  try {
    res.render("login");
  } catch (err) {
    res.status(500).json({
      messege: "Internal server error",
      success: false,
      err,
    });
  }
};

// creating employee applications for post request
exports.createApplication = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      whatsapp,
      education,
      skills,
      position,
      certification,
      onjob,
      address,
      reference,
      industry,
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !whatsapp || !education || !skills) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false,
      });
    }

    const createApplication = await Employee.create({
      name,
      email,
      phone,
      whatsapp,
      education,
      skills,
      position,
      certification,
      onjob,
      address,
      reference,
      industry,
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      err,
    });
  }
};

// Creating employer posting
exports.createPosting = async (req, res) => {
  // console.log("rbody :", req.body);
  try {
    const {
      userphone,
      companyname,
      position,
      totalopenings,
      reference,
      hrmail,
      hrmobile,
      hrwhatsapp,
      location,
      jobpostingdate,
      isopen,
      requirement,
      jobdescription,
      industry,
      skillsrequired,
      qualificationrequired,
    } = req.body;

    // Validate required fields
    if (
      !companyname ||
      !position ||
      !totalopenings ||
      !isopen ||
      !requirement ||
      !jobdescription
    ) {
      return res.status(400).json({
        message: "Missing required fields",
        success: false,
      });
    }

    const createPosting = await Employer.create({
      userphone,
      companyname,
      position,
      totalopenings,
      reference,
      hrmail,
      hrmobile,
      hrwhatsapp,
      location,
      jobpostingdate,
      isopen,
      requirement,
      jobdescription,
      industry,
      skillsrequired,
      qualificationrequired,
    });
    res.redirect("/");
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
      success: false,
      err,
    });
  }
};

// getiing employee count

exports.Home = async (req, res) => {
  try {
    const employeeCount = await Employee.countDocuments();
    const employerCount = await Employer.countDocuments();

    res.status(200).json({
      success: true,
      employeeCount,
      employerCount,
    });
  } catch (err) {
    res.status(500).json({
      messege: "Internal server error",
      success: false,
      err,
    });
    console.log(err);
  }
};
exports.getApplicationsCountByNumber = async (req, res) => {
  try {
    const phnumber = req.body.number;
    console.log("number :", phnumber);
    // Validate the number (add more validation if needed)

    const reward = await Employer.countDocuments({
      userphone: phnumber,
    });
    console.log("applicationsCount :", reward);
    res.status(200).json({ "your total reward points are ": reward });
    // .redirect("/login");
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
      err,
    });
    console.error(err);
  }
};
