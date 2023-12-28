const mongoose = require("mongoose");

const employerSchema = mongoose.Schema({
  userphone: {
    type: Number,
    required: true,
  },
  companyname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  totalopenings: {
    type: Number,
    required: true,
  },
  reference: {
    type: String,
  },
  hrmail: {
    type: String,
  },
  hrmobile: {
    type: Number,
  },
  hrwhatsapp: {
    type: Number,
  },
  location: {
    type: String,
  },
  Jobpostingdate: {
    type: Date,
  },
  isopen: {
    type: String,
    enum: ["Yes", "No"],
    default: "no",
    required: true,
  },
  requirement: {
    type: String,
    required: true,
  },
  jobdescription: {
    type: String,
    required: true,
  },
  industry: {
    type: String,
  },
  skillsrequired: {
    type: String,
  },
  qualificationrequired: {
    type: String,
  },
});
module.exports = mongoose.model("Employer", employerSchema);
