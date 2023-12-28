const express = require("express");
const {
  Home,
  getHome,
  createApplication,
  createPosting,
  Employee,
  Employer,
  getEmployee,
  getEmployer,
  getLogin,
  getApplicationsCountByNumber,
  getReward,
  rewards,
} = require("../controllers/employee");

const router = express.Router();

router.route("/").post(Home).get(getHome);
router.route("/login").post(getApplicationsCountByNumber).get(getLogin);
router.route("/employee").post(createApplication).get(getEmployee);
router.route("/employer").post(createPosting).get(getEmployer);
router.get("/count-data", Home); // Use the existing Home function for now
router.get("/application-count", getApplicationsCountByNumber);

module.exports = router;
